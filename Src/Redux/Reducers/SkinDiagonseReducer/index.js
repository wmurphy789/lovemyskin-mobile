import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
  image: null,
  predictions: [],
};

export const submitFeedbackAutodrumReducer = (state = initialState, action) => {
  switch (action.type) {
    //submit feedback
    case types.API_SUBMIT_FEEDBACK_AUTODRUM_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_SUBMIT_FEEDBACK_AUTODRUM_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        predictions: action.data,
        image: action.image,
      };
    case types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    default:
      return { ...state };
  }
};
