import { takeEvery, take, takeLatest } from "redux-saga/effects";
import * as types from "../ActionTypes";
import {
  createAffirmationSaga,
  deleteAffirmationSaga,
  getAffirmationByIdSaga,
  getAffirmationSaga,
  updateAffirmationSaga,
} from "./AffirmationSaga";
import { loginSaga, signupSaga, updateQuestionIdSaga } from "./AuthSaga";
import { submitFeedbackAutodrumSaga } from "./SkinDiagonseSaga";
import {
  createTrackerEntrySaga,
  deleteTrackerEntrySaga,
  editTrackerEntrySaga,
  getTrackerAllEntrySaga,
  getTrackerEntrySaga,
} from "./TeackerSaga";

import {
  fetchGetProfile,
  fetchChangePassword,
  fetchUpdateProfile,
  fetchUpdateProfileImage,
} from "./ProfileSaga";
import {
  fetchWellbeingCategories,
  fetchWellbeingCategoriesPosts,
  fetchSetLikeUnlikePost,
  fetchGetPostsComments,
  fetchSetPostComments
} from "./WellbeingSaga";

function* rootSaga() {
  //Auth
  yield takeEvery(types.API_LOGIN_LOAD, loginSaga);
  yield takeEvery(types.API_SIGNUP_LOAD, signupSaga);
  yield takeEvery(types.API_UPDATE_QUESTION_ID_LOAD, updateQuestionIdSaga);

  //affirmations
  yield takeEvery(types.API_GETAFFIRMATION_LOAD, getAffirmationSaga);
  yield takeEvery(types.API_GETAFFIRMATION_BY_ID_LOAD, getAffirmationByIdSaga);
  yield takeEvery(types.API_CREATE_AFFIRMATION_LOAD, createAffirmationSaga);
  yield takeEvery(types.API_DELETE_AFFIRMATION_LOAD, deleteAffirmationSaga);
  yield takeEvery(types.API_UPDATE_AFFIRMATION_LOAD, updateAffirmationSaga);

  //tracker
  yield takeEvery(types.API_GET_TRACKER_ENTRY_LOAD, getTrackerEntrySaga);
  yield takeEvery(types.API_GET_TRACKER_ALL_ENTRY_LOAD, getTrackerAllEntrySaga);
  yield takeEvery(types.API_DELETE_TRACKER_ENTRY_LOAD, deleteTrackerEntrySaga);
  yield takeEvery(types.API_CREATE_TRACKER_ENTRY_LOAD, createTrackerEntrySaga);
  yield takeEvery(types.API_EDIT_TRACKER_ENTRY_LOAD, editTrackerEntrySaga);

  //skin diagonse
  yield takeEvery(
    types.API_SUBMIT_FEEDBACK_AUTODRUM_LOAD,
    submitFeedbackAutodrumSaga
  );

  //profile
  yield takeEvery(types.GET_PROFILE_LOAD, fetchGetProfile);
  yield takeEvery(types.CHANGE_PASSWORD_LOAD, fetchChangePassword);
  yield takeEvery(types.UPDATE_PROFILE_LOAD, fetchUpdateProfile);
  yield takeEvery(types.UPDATE_PROFILE_IMAGE_LOAD, fetchUpdateProfileImage);

  //wellbeing
  yield takeEvery(types.WELLBEING_CATEGORIES_LOAD, fetchWellbeingCategories);
  yield takeEvery(types.WELLBEING_CATEGORIES_POSTS_LOAD, fetchWellbeingCategoriesPosts);
  yield takeEvery(types.LIKE_POST_LOAD, fetchSetLikeUnlikePost);
  yield takeEvery(types.SET_COMMENT_LOAD, fetchSetPostComments);
  yield takeEvery(types.GET_COMMENTS_LOAD, fetchGetPostsComments);
}
export default rootSaga;
