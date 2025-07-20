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

export const getAllProducts = gql`
    query GetAllProducts {
        getAllProducts {
            _id
            id
            title
            price
            description
            category
            image
            rating {
                rate
                count
            }
            published
            publishedAt
            createdAt
        }
    }
`

export const getPublishedProducts = gql`
    query GetPublishedProducts {
        getPublishedProducts {
            _id
            id
            title
            price
            description
            category
            image
            rating {
                rate
                count
            }
            published
            publishedAt
        }
    }
`