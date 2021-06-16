import { call, put } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import Methods from "../../../Support/Methods";
import { showmessage } from "../../../Support/Validations";
import * as ActionType from "../../ActionTypes";
import * as ApiMethods from "../../Api";
import NetInfo from "@react-native-community/netinfo";
import { setLoginStateAction } from "../../Actions/AuthActions";

export function* fetchGetProfile({ param }) {
  // get doctor details Saga
  try {
    let response = yield call(ApiMethods.getUserProfileApi, param);
    console.log(param, "Nav");
    if (response.status == 1) {
      yield put({ type: ActionType.GET_PROFILE_SUCCESS, Result: response });
    } else if (status === 3) {
      yield put({
        type: ActionType.GET_PROFILE_FAIL,
        Result: { msg: "Profile Not Found!" },
      });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({
        type: ActionType.GET_PROFILE_FAIL,
        Result: { msg: "Profile Not Found!" },
      });
      // showmessage("Something went wrong");
      // param.navigate("Auth")
      // showmessage("Profile not found! please login again.");
    }
  } catch (e) {
    showmessage("Something went wrong");
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}

export function* fetchUpdateProfile({ param }) {
  // get doctor details Saga
  try {
    let response = yield call(ApiMethods.updateProfileApi, param);
    if (response.status == 1) {
      yield put({ type: ActionType.UPDATE_PROFILE_SUCCESS, Result: response });
      if (!param.photoUpdate) {
        Methods.goBack(param.navigation);
        showmessage("Profile details updated successfully");
      }
    } else if (status === 3) {
      yield put({ type: ActionType.UPDATE_PROFILE_FAIL, Result: response });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({ type: ActionType.UPDATE_PROFILE_FAIL, Result: response });
      // param.navigate("Auth");
      // showmessage("Something went wrong");
    }
  } catch (e) {
    showmessage("Something went wrong");
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
export function* fetchUpdateProfileImage({ param, navigation }) {
  // get doctor details Saga

  try {
    const internetStatus = yield NetInfo.fetch();
    if (internetStatus.isConnected) {
      let response = yield call(ApiMethods.updateProfileImageApi, param.data);
      console.log(response, "response asdgahsj", param);
      if (response.status == 1) {
        yield put({
          type: ActionType.UPDATE_PROFILE_IMAGE_SUCESS,
          Result: response,
        });
        if (param.update) {
          Methods.goBack(navigation);
          showmessage("Profile details updated successfully");
        }
      } else {
        console.log(response);
        yield put({
          type: ActionType.UPDATE_PROFILE_IMAGE_FAIL,
          Result: response,
        });
        // showmessage("Failed to update Profile Image");
      }
    }
  } catch (e) {
    // showmessage("Failed to update Profile Image");
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}

export function* fetchChangePassword({ param }) {
  // get doctor details Saga
  try {
    let response = yield call(ApiMethods.changePasswordApi, param);
    console.log(response, "RESPONSE CHANGEPASSWORD");
    if (response.status == 1) {
      yield put({ type: ActionType.CHANGE_PASSWORD_SUCESS, Result: response });
      DataManager.clearLocalStorage();
      showmessage("Password changed successfully, please login again");
      // Methods.navigate(param.navigation, "Auth");
      yield put(setLoginStateAction(false));
    } else if (response.status == 3) {
      yield put({ type: ActionType.CHANGE_PASSWORD_FAIL, Result: response });
      showmessage("Please enter correct old password");
    } else {
      yield put({ type: ActionType.CHANGE_PASSWORD_FAIL, Result: response });
      // showmessage("Something went wrong");
    }
  } catch (e) {
    showmessage("Something went wrong");
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
