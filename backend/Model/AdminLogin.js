import Mongoose from 'mongoose'

const AdminLoginSchema = Mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
})

export default Mongoose.model("Admin_login", AdminLoginSchema);