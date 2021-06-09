import { put, call } from "redux-saga/effects";
import * as types from "../../ActionTypes";
import { submitFeedbackAutodrumApi } from "../../Api";
// submit feedback SAGA
export function* submitFeedbackAutodrumSaga(action) {
  yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_START });
  try {
    let response = yield call(submitFeedbackAutodrumApi, action.payload);
    let { result, status } = response;
    if (status === 1) {
      yield put({
        type: types.API_SUBMIT_FEEDBACK_AUTODRUM_SUCCESS,
        data: result.predictions,
        image: action.payload.image,
      });
      action.navigation.navigate("SkinDiagnosisReport");
    } else {
      yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR });
  }
}
