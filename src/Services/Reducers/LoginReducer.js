import { LOGIN } from "../constant";

const initialState = {
  LoginData: {},
};

export function UserLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        LoginData: action.data,
      };
      // eslint-disable-next-line no-unreachable
      break;
    
    default:
      return state;
  }
}
