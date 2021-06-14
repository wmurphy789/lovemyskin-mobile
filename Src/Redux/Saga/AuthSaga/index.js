import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import * as types from "../../ActionTypes";
import { loginApi, signupApi, updtaeQuestionIdApi } from "../../Api";
import jwt_decode from "jwt-decode";
import { showmessage } from "../../../Support/Validations";
// LOGIN SAGA
export function* loginSaga(action) {
  yield put({ type: types.API_LOGIN_START });
  try {
    let response = yield call(loginApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      const token = result.jwt;
      var decoded = jwt_decode(token);
      DataManager.setAccessToken(result.jwt);
      DataManager.setUserId(decoded.id);
      DataManager.setQuestionId(decoded.question_id);
      yield put({
        type: types.API_LOGIN_SUCCESS,
        questionId: decoded.question_id?.toString(),
      });
      showmessage("Login successfully");
      // if (decoded.question_id) {
      //   action.navigation.navigate("SkinPriorities");
      // }
      // else {
      //
      // }
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
    console.log("response--->", response);
    if (status === 1) {
      DataManager.setQuestionId(result.data.attributes?.question_id);
      yield put({
        type: types.API_UPDATE_QUESTION_ID_SUCCESS,
        questionId: result.data.attributes?.question_id?.toString(),
      });
      // action.navigation.navigate("Tabs");
    } else {
      yield put({ type: types.API_UPDATE_QUESTION_ID_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_UPDATE_QUESTION_ID_ERROR });
  }
}
