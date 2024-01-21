import  Mongoose  from "mongoose";

const OrderSchema = Mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      products: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          },
          quantity: {
            type: Number,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ],
      totalPrice: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
});

export default Mongoose.model('Order',OrderSchema);
