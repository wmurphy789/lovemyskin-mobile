import * as types from "../../ActionTypes";

export const loginAction = (info, navigation) => {
  const action = {
    type: types.API_LOGIN_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
export const signupAction = (info, navigation) => {
  const action = {
    type: types.API_SIGNUP_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
