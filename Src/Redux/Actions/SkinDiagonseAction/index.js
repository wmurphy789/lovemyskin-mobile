import * as types from "../../ActionTypes";

export const submitFeedbackAutodrumAction = (info, navigation) => {
  const action = {
    type: types.API_SUBMIT_FEEDBACK_AUTODRUM_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
