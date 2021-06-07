import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import { showmessage } from "../../../Support/Validations";
import * as types from "../../ActionTypes";
import {
  createAffirmationApi,
  getAffirmationApi,
  getAffirmationByIdApi,
} from "../../Api";

// get affirmation SAGA
export function* getAffirmationSaga(action) {
  yield put({ type: types.API_GETAFFIRMATION_START });
  try {
    let response = yield call(getAffirmationApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_GETAFFIRMATION_SUCCESS,
        data: result.data,
      });
    } else {
      yield put({ type: types.API_GETAFFIRMATION_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_GETAFFIRMATION_ERROR });
  }
}
export function* getAffirmationByIdSaga(action) {
  console.log("in saga");
  yield put({ type: types.API_GETAFFIRMATION_BY_ID_START });
  try {
    let response = yield call(getAffirmationByIdApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_GETAFFIRMATION_BY_ID_SUCCESS,
        data: result.data,
      });
    } else {
      yield put({ type: types.API_GETAFFIRMATION_BY_ID_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_GETAFFIRMATION_BY_ID_ERROR });
  }
}

// create affirmation SAGA
export function* createAffirmationSaga(action) {
  yield put({ type: types.API_CREATE_AFFIRMATION_START });
  try {
    let response = yield call(createAffirmationApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_CREATE_AFFIRMATION_SUCCESS,
      });
      showmessage("Affirmmation created successfully");
      action.navigation.navigate("AffirmationStack");
    } else {
      yield put({ type: types.API_CREATE_AFFIRMATION_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_CREATE_AFFIRMATION_ERROR });
  }
}
