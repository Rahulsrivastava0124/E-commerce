import { ADD_TO_ORDER } from "../constant"


export const OrderData = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_ORDER:
            return [...state, { OrderData: action.data }]
        default:
            return state
    }
}