import * as types from "../../ActionTypes";

export const getAffirmationAction = (info, navigation) => {
  const action = {
    type: types.API_GETAFFIRMATION_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
export const getAffirmationByIdAction = (info, navigation) => {
  const action = {
    type: types.API_GETAFFIRMATION_BY_ID_LOAD,
    payload: info,
    navigation,
  };
  return action;
};

export const createAffirmationAction = (info, navigation) => {
  const action = {
    type: types.API_CREATE_AFFIRMATION_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
