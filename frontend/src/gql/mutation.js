import {gql} from "@apollo/client";

export const Signin = gql`
mutation SignIn($signinData:SigninInput!){
 data:Signin(SigninData:$signinData){
    _id
    email
    firstName
    lastName
    
  }
} 
`
export const LoginUser = gql`
mutation Login($Logindata: LoginInput!) {
data: Login(LoginData: $Logindata) {
    token
    username
    _id
  }
}
`
export const UpdatePhone = gql`
mutation UpdateUser($updateData:UpdateInput!){
  acknowledgment:UpdateUser(UpdateData:$updateData){
    acknowledged
    matchedCount
    modifiedCount
  }
}
`

export const NewAddress = gql`
    mutation NewAddress($AddressData:AddressInput!){
        acknowledgment:NewAddress(AddressData:$AddressData){
            acknowledged
            matchedCount
            modifiedCount
        }
    }
`
export const RemoveAddress = gql`
    mutation($removeAddress: RemoveAddressInput!) {
        RemoveAddress(RemoveAddress: $removeAddress) {
            Address{
                type
                uniqueID
            }
        }
    }`

export const EditUserAddres =gql`
    mutation($UpdateData: AddressDataInput!) {
	UpdateAddress(UpdateAddressData: $UpdateData) {
		Update
	}
}
`