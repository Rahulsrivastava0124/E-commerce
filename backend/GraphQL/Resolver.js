import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config.js";

const User = mongoose.model("User")
const Admin_Login = mongoose.model("Admin_login")
const resolvers = {
    Query: {
        getUser: async (_, { _id }) => await User.findOne({ _id })
    },

    Mutation: {
        Login: async (_, { LoginData }) => {
            console.log(LoginData);
            const findUser = await User.findOne({ email: LoginData.email })
            if (!findUser) {
                throw new Error("email is does not exit !")
            }
            const passwordCheck = await bcrypt.compare(LoginData.password, findUser.password)
            console.log(passwordCheck);
            if (!passwordCheck) {
                throw new Error("email and password is invalide")
            }
            const token = jwt.sign({ userId: findUser._id }, JWT_SECRET);
            return { token, username: findUser.firstName, _id: findUser._id }
        }, Signin: async (_, { SigninData }) => {
            const hasedPassword = await bcrypt.hash(SigninData.password, 12)
            const signin = new User({
                ...SigninData, password: hasedPassword,
            })
            return await signin.save()
        }, UpdateUser: async (_, { UpdateData }, { userId }) => {
            if (!userId) throw new Error("You are not loggined");
            return User.updateOne({ _id: UpdateData._id }, {
                $set: {
                    phone: UpdateData.phone, lastName: UpdateData.lastName, firstName: UpdateData.firstName
                }
            });
        },

        // Address Update is Add new User Address in UserAddress Array and return a acknowledgment

        NewAddress: async (_, { AddressData }) => {
            return User.updateOne({ _id: AddressData._id }, {
                $push: {
                    Address: [{
                        uniqueID: new Date().getTime().toString() + Math.floor(Math.random() * 1000000),
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
            });
        },

        // remove Address is remove the data in address Array and return new Array data
        RemoveAddress: async (_, { RemoveAddress }) => {
            return User.findOneAndUpdate({ _id: RemoveAddress.userID },
                { $pull: { Address: { uniqueID: RemoveAddress._id } } },
                { new: true });
        },


        //Edit the existing Address data in edit function and return Update or 
        UpdateAddress: async (_, { UpdateAddressData }) => {
            const EditAddressData = await User.findOneAndUpdate(
                { 'Address._id': UpdateAddressData.AddressId }, {
                $set: {
                    'Address.$': {
                        ...UpdateAddressData.ChangeAddress
                    }
                }
            }, { new: true }
            )
            let updateData = { Update: true, NewData: EditAddressData.Address }
            return updateData;
        },

        //admin login after navigate the Admin home page 
        AdminLogin: async (_, { Admin_login_data }) => {
            const findAdmin = await Admin_Login.findOne({ email: Admin_login_data.Email })
            if (!findAdmin) {
                throw new Error("email is does not exit !")
            }
            const passwordCheck = bcrypt.compare(Admin_login_data.Password, findAdmin.password)
            if (!passwordCheck) {
                throw new Error("email and password is invalide")
            }
            const token = jwt.sign({ userId: findAdmin._id }, JWT_SECRET);
            return { token }
        }
    }
}

export default resolvers