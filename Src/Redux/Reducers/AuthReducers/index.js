import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    //Login
    case types.API_LOGIN_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_LOGIN_SUCCESS:
      return { ...state, isDisable: false, onLoad: false };
    case types.API_LOGIN_ERROR:
      return { ...state, isDisable: false, onLoad: false };
    
    //Omniauth
    case types.API_OMNIAUTH_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_OMNIAUTH_SUCCESS:
      return { ...state, isDisable: false, onLoad: false };
    case types.API_OMNIAUTH_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //Signup
    case types.API_SIGNUP_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_SIGNUP_SUCCESS:
      return { ...state, isDisable: false, onLoad: false };
    case types.API_SIGNUP_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //update question id
    case types.API_UPDATE_QUESTION_ID_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_UPDATE_QUESTION_ID_SUCCESS:
      return { ...state, isDisable: false, onLoad: false };
    case types.API_UPDATE_QUESTION_ID_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    default:
      return { ...state };
  }
};
