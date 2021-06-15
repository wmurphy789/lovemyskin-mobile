import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import * as types from "../../ActionTypes";
import { loginApi, signupApi, updtaeQuestionIdApi, createTokenApi, omniauthApi } from "../../Api";
import jwt_decode from "jwt-decode";
import { showmessage } from "../../../Support/Validations";
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
      showmessage("Login successfully");
      if (decoded.question_id) {
        action.navigation.navigate("Tabs");
      } else {
        action.navigation.navigate("SkinPriorities");
      }
    } else {
      yield put({ type: types.API_LOGIN_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_LOGIN_ERROR });
  }
}

// OMNIAUTH SAGA
export function* omniauthSaga(action) {
  yield put({ type: types.API_OMNIAUTH_START });
  try {
    let response = yield call(omniauthApi, action.payload);
    let { result, status } = response;
    console.log("t---->", response);
    if (status === 1) {
      const token = result.jwt;
      var decoded = jwt_decode(token);
      yield put({
        type: types.API_OMNIAUTH_SUCCESS,
      });
      DataManager.setAccessToken(result.jwt);
      DataManager.setUserId(decoded.id);
      showmessage("Login successfully");
      if (decoded.question_id) {
        action.navigation.navigate("Tabs");
      } else {
        action.navigation.navigate("SkinPriorities");
      }
    } else {
      yield put({ type: types.API_OMNIAUTH_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_OMNIAUTH_ERROR });
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
      showmessage("You have registered successfully");
      // DataManager.setAccessToken(result?.data?.jwt);
      // DataManager.setUserId(result?.data?.id);
      action.navigation.goBack();
    } else {
      yield put({ type: types.API_SIGNUP_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_SIGNUP_ERROR });
  }
}

// update question id SAGA
export function* updateQuestionIdSaga(action) {
  yield put({ type: types.API_UPDATE_QUESTION_ID_START });
  try {
    let response = yield call(updtaeQuestionIdApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_UPDATE_QUESTION_ID_SUCCESS,
      });
      action.navigation.navigate("Tabs");
    } else {
      yield put({ type: types.API_UPDATE_QUESTION_ID_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_UPDATE_QUESTION_ID_ERROR });
  }
}

// update mobile_token
export function* updateMobileToken(action) {
  try {
    yield call(createTokenApi, action.payload);
  } catch (error) {
    console.log(error)
  }
}
