import {ADD_TO_WISHLIST,REMOVE_TO_WISHLIST} from '../constant'
  
export const UserWish=(state=[],action)=>{
    switch (action.type) {
      case ADD_TO_WISHLIST:
        return [
          ...state,
         { WishList: action.data,}
        ];
        case REMOVE_TO_WISHLIST:
          console.log("state",state);
          state.pop();
          return [
            ...state,
          ]
    
      default:
        return state;
       
    }
    }
