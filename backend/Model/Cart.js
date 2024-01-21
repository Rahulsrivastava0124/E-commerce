import  Mongoose  from "mongoose";

const CartSchema= Mongoose.Schema({
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
          }
        }
      ],
      totalPrice: {
        type: Number,
        required: true
      }
});

export default Mongoose.model('Cart',CartSchema)