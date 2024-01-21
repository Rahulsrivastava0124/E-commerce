import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: [
        {
            type: String,
            required: true
        }
    ],
    rating: {
        rate: {
            type: Number,
            required
        },
        count: {
            type: Number,
            required: true
        }
    }
})

export default mongoose.model('Product',productSchema)
