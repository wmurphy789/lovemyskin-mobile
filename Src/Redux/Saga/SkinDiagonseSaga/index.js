import { put, call } from "redux-saga/effects";
import * as types from "../../ActionTypes";
import { submitFeedbackAutodrumApi } from "../../Api";
import { setLoginStateAction } from "../../Actions/AuthActions";
import { DataManager } from "../../../Support/Datamanager";
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
    } else if (status === 3) {
      yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR });
    }
  } catch (error) {
    yield put({ type: types.API_SUBMIT_FEEDBACK_AUTODRUM_ERROR });
  }
}
