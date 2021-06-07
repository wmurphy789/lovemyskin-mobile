import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import * as types from "../../ActionTypes";
import { loginApi, signupApi } from "../../Api";
import jwt_decode from "jwt-decode";
// LOGIN SAGA
export function* loginSaga(action) {
  yield put({ type: types.API_LOGIN_START });
  try {
    let response = yield call(loginApi, action.payload);
    let { result, status } = response;
    console.log("t---->", response);
    if (status === 1) {
      const token = result.jwt;
      var decoded = jwt_decode(token);
      yield put({
        type: types.API_LOGIN_SUCCESS,
      });
      DataManager.setAccessToken(result.jwt);
      DataManager.setUserId(decoded.id);
      action.navigation.navigate("Tabs");
    } else {
      yield put({ type: types.API_LOGIN_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_LOGIN_ERROR });
  }
}

// signup SAGA
export function* signupSaga(action) {
  yield put({ type: types.API_SIGNUP_START });
  try {
    let response = yield call(signupApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_SIGNUP_SUCCESS,
      });
      // action.navigation.navigate("Tabs");
    } else {
      yield put({ type: types.API_SIGNUP_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_SIGNUP_ERROR });
  }
}
