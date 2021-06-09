import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
  data: [],
  dataDetails: [],
  myAffirmation: {},
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
        data: filterEntry(action.data),
        myAffirmation: filterEntryMyAffirmation(action.data),
      };
    case types.API_GETAFFIRMATION_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //get affirmation by id
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

    //delete affirmation
    case types.API_DELETE_AFFIRMATION_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_DELETE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
      };
    case types.API_DELETE_AFFIRMATION_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //update affirmation
    case types.API_UPDATE_AFFIRMATION_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_UPDATE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
      };
    case types.API_UPDATE_AFFIRMATION_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    default:
      return { ...state };
  }
};

const filterEntry = (data) => {
  var newArray = data.filter(function (item) {
    return item.description != "My Affirmations";
  });
  return newArray.length > 0 ? newArray : [];
};

const filterEntryMyAffirmation = (data) => {
  var newArray = data.filter(function (item) {
    return item.description === "My Affirmations";
  });
  return newArray.length > 0 ? newArray[0] : {};
};

// const filterdata = (arr) => {
//   const new_index = 0;
//   if (new_index >= arr.length) {
//     var k = new_index - arr.length + 1;
//     while (k--) {
//       arr.push(undefined);
//     }
//   }
//   arr.splice(new_index, 0, arr.splice(3, 1)[0]);
//   return arr;
// };
