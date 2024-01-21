import  Mongoose  from "mongoose";

const WishListSchema = Mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        }
      ]
});

export default Mongoose.model('WishList',WishListSchema);
