import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
  data: [],
  dataDetails: {},
};
const filterdata = (arr) => {
  const new_index = 0;
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(3, 1)[0]);
  return arr;
};

export const AffirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    //get affirmation
    case types.API_GETAFFIRMATION_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_GETAFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        data: filterdata(action.data),
      };
    case types.API_GETAFFIRMATION_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //Signup
    case types.API_GETAFFIRMATION_BY_ID_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_GETAFFIRMATION_BY_ID_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        dataDetails: action.data,
      };
    case types.API_GETAFFIRMATION_BY_ID_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //create affirmation
    case types.API_CREATE_AFFIRMATION_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_CREATE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
      };
    case types.API_CREATE_AFFIRMATION_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    default:
      return { ...state };
  }
};
