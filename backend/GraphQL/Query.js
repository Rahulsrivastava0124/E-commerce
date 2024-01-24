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

    type Modified{
        Update:Boolean,
        NewData:[Address]
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
        NewAddress(AddressData:AddressInput!):UpdateState
        RemoveAddress(RemoveAddress:RemoveAddressInput!):User
        UpdateAddress(UpdateAddressData:AddressDataInput!):Modified
        AdminLogin(Admin_login_data:Admin_login_input!):Token
    }

    # Mutation inputs
input Admin_login_input{
    Email:String!
    Password:String!
}

    input AddressD{
        uniqueID:String!,
        name:String!,
        country:String!,
        type:String!,
        select:Boolean!,
        state:String!,
        city:String!,
        street:String!,
        number:String!,
        zipcode:String!,
        _id:ID!
    }

    input  AddressDataInput{
        AddressId:ID!
        ChangeAddress:AddressD!
    }

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