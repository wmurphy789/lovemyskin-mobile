import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import { navigationRef } from "../../../Support/Methods";
import { showmessage } from "../../../Support/Validations";
import { setLoginStateAction } from "../../Actions/AuthActions";
import * as types from "../../ActionTypes";
import {
  createAffirmationApi,
  deleteAffirmationApi,
  getAffirmationApi,
  getAffirmationByIdApi,
  updateAffirmationApi,
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
        data: result,
      });
    } else if (status === 3) {
      yield put({ type: types.API_GETAFFIRMATION_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
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
      if (result?.data?.length == 0) {
        action.navigation.goBack();
      }
    } else if (status === 3) {
      yield put({ type: types.API_GETAFFIRMATION_BY_ID_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
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
      showmessage("Affirmation added successfully");
      action.navigation.navigate("AffirmationStack");
    } else if (status === 3) {
      yield put({ type: types.API_CREATE_AFFIRMATION_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({ type: types.API_CREATE_AFFIRMATION_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_CREATE_AFFIRMATION_ERROR });
  }
}

//delete affirmation saga
export function* deleteAffirmationSaga(action) {
  yield put({ type: types.API_DELETE_AFFIRMATION_START });
  try {
    let response = yield call(deleteAffirmationApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      // yield put({
      //   type: types.API_GETAFFIRMATION_BY_ID_LOAD,
      //   payload: action.payload.itemId,
      //   navigation: action.navigation,
      // });
      yield put({
        type: types.API_DELETE_AFFIRMATION_SUCCESS,
      });
      showmessage("Affirmation deleted successfully");
      // action.navigation.goBack();
    } else if (status === 3) {
      yield put({ type: types.API_DELETE_AFFIRMATION_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({ type: types.API_DELETE_AFFIRMATION_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_DELETE_AFFIRMATION_ERROR });
  }
}

//update affirmation saga
export function* updateAffirmationSaga(action) {
  yield put({ type: types.API_UPDATE_AFFIRMATION_START });
  try {
    let response = yield call(updateAffirmationApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_UPDATE_AFFIRMATION_SUCCESS,
      });
      showmessage("Affirmation updated successfully");
      let route = navigationRef.current.getCurrentRoute();
      if(route.name != "ViewAffirmation"){

        action.navigation.goBack();
      }
    } else if (status === 3) {
      yield put({ type: types.API_UPDATE_AFFIRMATION_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({ type: types.API_UPDATE_AFFIRMATION_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_UPDATE_AFFIRMATION_ERROR });
  }
}
