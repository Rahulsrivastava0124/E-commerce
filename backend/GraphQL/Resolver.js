import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from "../config.js";
import signin from "../Model/Signin.js";

const Signin = mongoose.model("Signin")

const resolvers = {
    Query: {
        getUser: async (_, {_id}) => await Signin.findOne({}).populate("Address")
    },
    Mutation: {
        Login: async (_, {LoginData}) => {
            const findUser = await Signin.findOne({email: LoginData.email})
            if (!findUser) {
                throw new Error("email is does not exit !")
            }
            const passwordCheck = bcrypt.compare(LoginData.password, findUser.password)
            if (!passwordCheck) {
                throw new Error("email and password is invalide")
            }
            const token = jwt.sign({userId: findUser._id}, JWT_SECRET);
            return {token, username: findUser.firstName, _id: findUser._id}
        },
        Signin: async (_, {SigninData}) => {
            const hasedPassword = await bcrypt.hash(SigninData.password, 12)
            const signin = new Signin({
                ...SigninData,
                password: hasedPassword,
            })
            return await signin.save()
        },
        UpdateUser: async (_, {UpdateData}) => {
            const UpdateUser = Signin.updateOne({_id: UpdateData._id}, {
                $set: {
                    phone: UpdateData.phone,
                    lastName: UpdateData.lastName,
                    firstName: UpdateData.firstName
                }
            })
            return await UpdateUser
            2
        },

        // Address Update is Add new User Address in UserAddress Array and return a acknowledgment

        AddressUpdate: async (_, {AddressData}) => {
            const UpdateUser = Signin.updateOne({_id: AddressData._id}, {
                $push: {
                    Address: [{
                        name: AddressData.name,
                        city: AddressData.city,
                        number: AddressData.number,
                        street: AddressData.street,
                        select: AddressData.select,
                        zipcode: AddressData.zipcode,
                        state: AddressData.state,
                        country: AddressData.country,
                        type: AddressData.type,
                    }]
                }
            })
            return await UpdateUser
        },
        RemoveAddress: async (_, {RemoveAddress}) => {
            const RemoveAddressData = signin.findOneAndUpdate({_id: RemoveAddress.userId}, {
                $pull: {
                    Address: {
                        _id: RemoveAddress._id
                    }
                }
            })

            return await RemoveAddressData
        }
    }
}

export default resolvers