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
export const updateQuestionIdAction = (info, navigation) => {
  const action = {
    type: types.API_UPDATE_QUESTION_ID_LOAD,
    payload: info,
    navigation,
  };
  return action;
};

export const setLoginStateAction = (info) => {
  const action = {
    type: types.SET_LOGIN_REDUCER_NAVIGATION,
    payload: info,
  };
  return action;
};
export const setQuestionIdStateAction = (info) => {
  const action = {
    type: types.SET_QUESTION_ID_REDUCER_NAVIGATION,
    payload: info,
  };
  return action;
};
