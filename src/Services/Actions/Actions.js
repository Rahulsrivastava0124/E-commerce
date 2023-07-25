import {
  ADD_TO_CART,
  LOGIN,
  REMOVE_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  PRODUCT_DATA,
} from "../constant";
export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const RemoveToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};

export const WishListToCart = (data) => {
  return {
    type: ADD_TO_WISHLIST,
    data: data,
  };
};
export const RemoveWishList = (data) => {
  console.log("RemoveWishList");
  return {
    type: REMOVE_TO_WISHLIST,
    data: data,
  };
};

export const UserLogin = (data) => {
  return {
    type: LOGIN,
    data: data,
  };
};

export const ProductData=(data)=>{
  return {
    type:PRODUCT_DATA,
    data:data
  }
}