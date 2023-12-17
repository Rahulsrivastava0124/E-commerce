import { gql } from "apollo-server-core";

const typeDefs = gql`
# Schema
type Token{
    token:String
    username:String
    _id:ID
}

type User{
    _id:ID
    firstName:String
    lastName:String
    email:String
    phone:String
    address:Address
}

type Address{
    city:String,
    street:String,
    number:String,
    zipcode:String
    
}

type UpdateState{
    acknowledged:Boolean ,
    modifiedCount:Int,
    matchedCount: Int
}

# Query for server
type Query{
  getUser(_id:ID!):User
}

# Mutation for server
type Mutation{
    Login(LoginData:LoginInput!):Token
    Signin(SigninData:SigninInput!):User
    UpdateUser(UpdateData:UpdateInput!):UpdateState
    AddressUpdate(AddressData:AddressInput!):UpdateState
    
}

# Mutation inputs
input AddressInput{
    _id:ID!
    city:String!
    street:String!
    zipcode:String!
    number:String!
}

input UpdateInput{
    lastName:String!
    firstName:String!
    phone:String!
    _id:ID!
}

input LoginInput{
    email:String!
    password:String!
}
input SigninInput{
    email:String!
    firstName:String!
    lastName:String!
    password:String!
}

`;

export default typeDefs;