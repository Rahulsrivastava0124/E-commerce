import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./GraphQL/Query.js";
import mongoose from "mongoose";
import { MONGO_DB } from "./config.js";
import './Model/Signin.js'

// Connect to Mongodb Cluster 
mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("mongodb is connected Succesfully");
})
import resolvers from "./GraphQL/Resolver.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
    console.log("your server is started on ", url);
})