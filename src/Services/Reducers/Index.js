import { combineReducers } from "redux";
import { UserLogin } from "./LoginReducer";
import {UserWish} from './WishListReducer'
export default combineReducers({
  UserLogin,
  UserWish,
});
