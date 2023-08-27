import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST } from "../constant";

export const UserWish = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, { WishList: action.data }];
    case REMOVE_TO_WISHLIST:
      for (let index = 0; index < state.length; index++) {
        if (
          state[index].WishList.state.category === action.data.state.category
        ) {
          if (state[index].WishList.state.id === action.data.state.id) {
            state.splice(index, index === 0 ? 1 : index++);
          }
        }
      }
      return [...state];

    default:
      return state;
  }
};
