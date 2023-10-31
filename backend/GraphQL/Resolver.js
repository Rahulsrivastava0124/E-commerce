import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config.js";
const Signin = mongoose.model("Signin")

const resolvers = {
    Query: {
        getUser: async (_, { _id }) => await Signin.findOne()
    },
    Mutation: {
        Login: async (_, { LoginData }) => {
            const findUser = await Signin.findOne({ email: LoginData.email })
            if (!findUser) {
                throw new Error("email is does not exit !")
            }
            const passwordCheck = bcrypt.compare(LoginData.password, findUser.password)
            if (!passwordCheck) {
                throw new Error("email and password is invalide")
            }
            const token = jwt.sign({ userId: findUser._id }, JWT_SECRET);
            return { token, username: findUser.firstName, _id: findUser._id }
        },
        Signin: async (_, { SigninData }) => {
            const hasedPassword = await bcrypt.hash(SigninData.password, 12)
            const signin = new Signin({
                ...SigninData,
                password: hasedPassword,
            })
            return await signin.save()
        },
        UpdateUser: async (_, { UpdateData }) => {
            const UpdateUser = Signin.updateOne({ _id: UpdateData._id }, { $set: { phone: UpdateData.phone } })
            return await UpdateUser
        }

    }
}

export default resolvers