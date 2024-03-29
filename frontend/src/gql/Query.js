import {gql} from "@apollo/client";

export const getUser = gql`
    query getUser($id:ID!){
        user:getUser(_id:$id){
            firstName
            lastName
            email
            phone
            Address{
                uniqueID
                name
                country
                type
                select
                state
                city
                street
                number
                zipcode
                _id
            }
        }
    }
`