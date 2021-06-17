import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
  data: [],
  dataDetails: [],
  myAffirmation: {},
  isDeleted: false,
  isEdited: false,
  songs : []
};

export const AffirmationReducer = (state = initialState, action) => {
  switch (action.type) {
    //get affirmation
    case types.API_GETAFFIRMATION_START:
      return {
        ...state,
        isDisable: true,
        onLoad: true,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_GETAFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        data: filterEntry(action.data),
        myAffirmation: filterEntryMyAffirmation(action.data),
        isEdited: false,
        isDeleted: false,
      };
    case types.API_GETAFFIRMATION_ERROR:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
      };

    //get affirmation by id
    case types.API_GETAFFIRMATION_BY_ID_START:
      return {
        ...state,
        isDisable: true,
        onLoad: true,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_GETAFFIRMATION_BY_ID_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        dataDetails: action.data,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_GETAFFIRMATION_BY_ID_ERROR:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
      };

    //create affirmation
    case types.API_CREATE_AFFIRMATION_START:
      return {
        ...state,
        isDisable: true,
        onLoad: true,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_CREATE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_CREATE_AFFIRMATION_ERROR:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
      };

    //delete affirmation
    case types.API_DELETE_AFFIRMATION_START:
      return {
        ...state,
        isDisable: true,
        onLoad: true,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_DELETE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: true,
      };
    case types.API_DELETE_AFFIRMATION_ERROR:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
      };

    //update affirmation
    case types.API_UPDATE_AFFIRMATION_START:
      return {
        ...state,
        isDisable: true,
        onLoad: true,
        isEdited: false,
        isDeleted: false,
      };
    case types.API_UPDATE_AFFIRMATION_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isDeleted: false,
        isEdited: true,
      };
    case types.API_UPDATE_AFFIRMATION_ERROR:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isDeleted: false,
        isEdited: false,
      };

    //clear affirmation reducer
    case types.API_CLEAR_REDUCER_AFFIRMATION_START:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isEdited: false,
        isDeleted: false,
        dataDetails: [],
      };
        // set songs
    case types.SET_SONGS_IN_REDUCER:
      return {
        ...state,
        songs: action.songs,
      };
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
