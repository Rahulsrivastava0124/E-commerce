import {gql} from "apollo-server-core";

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
    Address:[Address]
}

type Address{
    uniqueID:String,
    name:String,
    country:String,
    type:String,
    select:Boolean,
    state:String,
    city:String,
    street:String,
    number:String,
    zipcode:String,
    _id:ID
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
    RemoveAddress(RemoveAddress:RemoveAddressInput!):User
}

# Mutation inputs
input RemoveAddressInput{
    _id:ID!
    userID:ID!
}
input AddressInput{
    _id:ID!
    name:String!
    country:String!
    type:String!
    state:String!
    city:String!
    select:Boolean!
    street:String!
    number:String!
    zipcode:String!
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