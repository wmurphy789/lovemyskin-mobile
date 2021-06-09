import { put, call } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import { showmessage } from "../../../Support/Validations";
import * as types from "../../ActionTypes";
import {
  getTrackerAllEntryApi,
  getTrackerEntryApi,
  deleteTrackerEntryApi,
  createTrackerEntryApi,
  editTrackerEntryApi,
} from "../../Api";

// get tracker entry SAGA
export function* getTrackerEntrySaga(action) {
  yield put({ type: types.API_GET_TRACKER_ENTRY_START });
  try {
    let response = yield call(getTrackerEntryApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_GET_TRACKER_ENTRY_SUCCESS,
        data: result.data,
      });
    } else {
      yield put({ type: types.API_GET_TRACKER_ENTRY_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_GET_TRACKER_ENTRY_ERROR });
  }
}
//get all entries saga
export function* getTrackerAllEntrySaga(action) {
  yield put({ type: types.API_GET_TRACKER_ALL_ENTRY_START });
  try {
    let response = yield call(getTrackerAllEntryApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_GET_TRACKER_ALL_ENTRY_SUCCESS,
        data: result.data,
        selectedDate: action.payload.selectedDate,
        meta: result.meta,
      });
    } else {
      yield put({ type: types.API_GET_TRACKER_ALL_ENTRY_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_GET_TRACKER_ALL_ENTRY_ERROR });
  }
}

// delte tracker entry SAGA
export function* deleteTrackerEntrySaga(action) {
  yield put({ type: types.API_DELETE_TRACKER_ENTRY_START });
  try {
    let response = yield call(deleteTrackerEntryApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_DELETE_TRACKER_ENTRY_SUCCESS,
      });
    } else {
      yield put({ type: types.API_DELETE_TRACKER_ENTRY_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_DELETE_TRACKER_ENTRY_ERROR });
  }
}

//create entries saga
export function* createTrackerEntrySaga(action) {
  yield put({ type: types.API_CREATE_TRACKER_ENTRY_START });
  try {
    let response = yield call(createTrackerEntryApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_CREATE_TRACKER_ENTRY_SUCCESS,
      });
      showmessage("Entry created successfully");
      action.navigation.navigate("MyTracker");
    } else {
      yield put({ type: types.API_CREATE_TRACKER_ENTRY_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_CREATE_TRACKER_ENTRY_ERROR });
  }
}
//update entries saga
export function* editTrackerEntrySaga(action) {
  yield put({ type: types.API_EDIT_TRACKER_ENTRY_START });
  try {
    let response = yield call(editTrackerEntryApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_EDIT_TRACKER_ENTRY_SUCCESS,
      });
      showmessage("Entry updated successfully");
      action.navigation.navigate("MyTracker");
    } else {
      yield put({ type: types.API_EDIT_TRACKER_ENTRY_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_EDIT_TRACKER_ENTRY_ERROR });
  }
}
