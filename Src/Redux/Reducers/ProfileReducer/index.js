import * as Actiontypes from "../../ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  userProfileData: {},
  id: null,
  isImageUpdated: false,
};

export const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //************************************************>> GET PROFILE CASES <<**************************************************/
    case Actiontypes.GET_PROFILE_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actiontypes.GET_PROFILE_SUCCESS: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
        userProfileData: action.Result.result.data.attributes,
        id: action.Result.result.data.id,
      };
    }
    case Actiontypes.GET_PROFILE_FAIL: {
      //  GET DOCTOR DETAILS FAIL

      return {
        ...state,
        isLoading: false,
        userProfileData: {},
      };
    }
    //************************************************>> UPDATE PROFILE CASES <<**************************************************/
    case Actiontypes.UPDATE_PROFILE_LOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actiontypes.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userProfileData: action.Result.result.data.attributes,
        id: action.Result.result.data.id,
      };
    }
    case Actiontypes.UPDATE_PROFILE_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    //progile pic update
    case Actiontypes.UPDATE_PROFILE_IMAGE_LOAD: {
      return {
        ...state,
        isLoading: true,
        isImageUpdated: true,
      };
    }
    case Actiontypes.UPDATE_PROFILE_IMAGE_SUCESS: {
      return {
        ...state,
        isLoading: false,
        userProfileData: action.Result.result.data.attributes,
        id: action.Result.result.data.id,
        isImageUpdated: false,
      };
    }
    case Actiontypes.UPDATE_PROFILE_IMAGE_FAIL: {
      return {
        ...state,
        isLoading: false,
        isImageUpdated: false,
      };
    }

    //************************************************>> CHANGE PASSWORD CASES <<**************************************************/
    case Actiontypes.CHANGE_PASSWORD_LOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actiontypes.CHANGE_PASSWORD_SUCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case Actiontypes.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
