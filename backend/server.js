import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import typeDefs from "./GraphQL/Query.js";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_DB } from "./config.js";
import "./Model/Signin.js";
import './Model/AdminLogin.js'
import jwt from "jsonwebtoken";

// Create Express app
const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// Compression middleware for better performance
app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  },
  level: 6,
  threshold: 1024
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://rahulsrivastava0124.github.io'] 
    : ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/graphql', limiter);

// MongoDB connection with optimizations
mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    bufferCommands: false,
    bufferMaxEntries: 0
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Received SIGINT. Graceful shutdown...');
    await mongoose.connection.close();
    process.exit(0);
});

import resolvers from "./GraphQL/Resolver.js";

// Apollo Server configuration with performance optimizations
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const { authorization } = req.headers;
        if (authorization) {
            try {
                const { userId } = jwt.verify(authorization, JWT_SECRET);
                return { userId };
            } catch (error) {
                console.log('JWT verification error:', error.message);
                return {};
            }
        }
        return {};
    },
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
        {
            requestDidStart() {
                return {
                    didResolveOperation(requestContext) {
                        console.log(`Operation: ${requestContext.request.operationName}`);
                    },
                    didEncounterErrors(requestContext) {
                        console.error('GraphQL errors:', requestContext.errors);
                    }
                };
            }
        }
    ],
    introspection: process.env.NODE_ENV !== 'production',
    playground: process.env.NODE_ENV !== 'production',
    cache: 'bounded',
    persistedQueries: {
        cache: new Map(),
        ttl: 900, // 15 minutes
    },
    formatError: (error) => {
        console.error('GraphQL Error:', error);
        return {
            message: error.message,
            code: error.extensions?.code,
            path: error.path
        };
    },
});

// Start server
async function startServer() {
    await server.start();
    server.applyMiddleware({ 
        app, 
        path: '/graphql',
        cors: false // Already handled by express cors
    });

    const PORT = process.env.PORT || 4400;
    
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        console.log(`📊 GraphQL Playground: http://localhost:${PORT}${server.graphqlPath}`);
    });
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Express error:', error);
    res.status(500).json({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
});

startServer().catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1);
});
