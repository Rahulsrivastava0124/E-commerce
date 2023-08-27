import { combineReducers } from "redux";
import { UserLogin } from "./LoginReducer";
import { UserWish } from './WishListReducer'
import { AddToCart } from "./CartReducer";
export default combineReducers({
  UserLogin,
  UserWish,
  AddToCart,
});
