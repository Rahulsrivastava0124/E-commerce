import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

export const AddToCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (!action.data.state.hasOwnProperty('count')) {
                action.data.state['count'] = 1;
            }
            var match = true;
            for (let i = 0; i < state.length; i++) {
                match = true;
                if (state[i].Cart.state.element.id === action.data.state.element.id) {
                    state[i].Cart.state.count = state[i].Cart.state.count + 1
                    match = false;
                    break;
                }

            }
            return match ? [...state, { Cart: action.data }] : [...state];
        case REMOVE_TO_CART:
            for (let i = 0; i < state.length; i++) {

                if (state[i].Cart.state.element.id === action.data.state.id) {
                    if (state[i].Cart.state.count === 1) {
                        state.splice(i, i === 0 ? 1 : i++);
                    } else {
                        state[i].Cart.state.count = state[i].Cart.state.count - 1
                    }

                }
            }
            return [...state]
        default:
            return state;
    }
}