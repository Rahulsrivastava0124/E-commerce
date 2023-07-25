import { PRODUCT_DATA } from "../constant";

export const ProductData=(state={},action)=>{
switch (action.type) {
    case PRODUCT_DATA:
        return {
            ...state,
            productData : action.data
        }
        // eslint-disable-next-line no-unreachable
        break;

    default:
        return state;
}
}