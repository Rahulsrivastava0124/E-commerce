import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./GraphQL/Query.js";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_DB } from "./config.js";
import "./Model/Signin.js";
import './Model/AdminLogin.js'
import jwt from "jsonwebtoken";

// Connect to Mongodb Cluster
mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("mongodb is connected Succesfully");
});
import resolvers from "./GraphQL/Resolver.js";

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
                console.log(error.message);
            }
        }
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(4400).then(({ url }) => {
    console.log("your server is started on ", url);
});
