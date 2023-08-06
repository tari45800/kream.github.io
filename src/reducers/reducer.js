import { initialState } from "./initialState";
import { IS_LOGIN } from "../actions";

const itemReducer = (state = initialState, action) => {

  switch (action.type) {

    case IS_LOGIN : 
    return Object.assign({}, state, {
      login : {'isLogin' : !state.login.isLogin}
    })
    
    default : return state;
  }
}

export default itemReducer;