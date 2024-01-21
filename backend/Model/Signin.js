import mongoose from 'mongoose';

const SigninSchema = mongoose.Schema(
    {
        Address: [
            {
                uniqueID: {
                    type: String,
                    required: true
                },
                country: {
                    type: String,
                    default: "Country"
                },
                state: {
                    type: String,
                    default: "State"
                },
                name: {
                    type: String,
                    default: "Geast"

                },
                type: {
                    type: String,
                    default: ""
                },
                select: {
                    type: Boolean,
                    default: "false"
                },
                city: {
                    type: String,
                    default: "city"
                },
                street: {
                    type: String,
                    default: "street"
                },
                number: {
                    type: String,
                    default: "number"
                },
                zipcode: {
                    type: String,
                    default: "zipcode"
                }
            }
        ],
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            default: 1123456789
        }
    }
);

export default mongoose.model('User', SigninSchema);
