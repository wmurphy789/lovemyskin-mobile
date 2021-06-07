import { takeEvery, take, takeLatest } from "redux-saga/effects";
import * as types from "../ActionTypes";
import {
  createAffirmationSaga,
  getAffirmationByIdSaga,
  getAffirmationSaga,
} from "./AffirmationSaga";
import { loginSaga, signupSaga } from "./AuthSaga";
import {
  createTrackerEntrySaga,
  deleteTrackerEntrySaga,
  editTrackerEntrySaga,
  getTrackerAllEntrySaga,
  getTrackerEntrySaga,
} from "./TeackerSaga";

function* rootSaga() {
  //Auth
  yield takeEvery(types.API_LOGIN_LOAD, loginSaga);
  yield takeEvery(types.API_SIGNUP_LOAD, signupSaga);

  //affirmations
  yield takeEvery(types.API_GETAFFIRMATION_LOAD, getAffirmationSaga);
  yield takeEvery(types.API_GETAFFIRMATION_BY_ID_LOAD, getAffirmationByIdSaga);
  yield takeEvery(types.API_CREATE_AFFIRMATION_LOAD, createAffirmationSaga);

  //tracker
  yield takeEvery(types.API_GET_TRACKER_ENTRY_LOAD, getTrackerEntrySaga);
  yield takeEvery(types.API_GET_TRACKER_ALL_ENTRY_LOAD, getTrackerAllEntrySaga);
  yield takeEvery(types.API_DELETE_TRACKER_ENTRY_LOAD, deleteTrackerEntrySaga);
  yield takeEvery(types.API_CREATE_TRACKER_ENTRY_LOAD, createTrackerEntrySaga);
  yield takeEvery(types.API_EDIT_TRACKER_ENTRY_LOAD, editTrackerEntrySaga);
}
export default rootSaga;
