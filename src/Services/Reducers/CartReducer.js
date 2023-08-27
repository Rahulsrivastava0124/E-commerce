import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

export const AddToCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, { Cart: action.data }];
        case REMOVE_TO_CART:
            for (let i = 0; i < state.length; i++) {
                if (state[i].Cart.state.id === action.data.state.Cart.state.id) {
                    state.splice(i, i === 0 ? 1 : i++);
                }
            }
            return [...state]
        default:
            return state;
    }
}