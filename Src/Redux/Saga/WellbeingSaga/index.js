import { call, put } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import Methods from "../../../Support/Methods";
import { showmessage } from "../../../Support/Validations";
import * as ActionType from "../../ActionTypes";
import * as ApiMethods from "../../Api";
import { setLoginStateAction } from "../../Actions/AuthActions";
export function* fetchWellbeingCategories({ param }) {
  try {
    let response = yield call(ApiMethods.wellbeingCategoriesApi, param);
    if (response.status == 1) {
      yield put({
        type: ActionType.WELLBEING_CATEGORIES_SUCESS,
        Result: response.result,
      });
    } else if (status === 3) {
      yield put({
        type: ActionType.WELLBEING_CATEGORIES_FAIL,
        Result: { msg: "Categories Not Found!" },
      });
      DataManager.clearLocalStorage();
      yield put(setLoginStateAction(false));
    } else {
      yield put({
        type: ActionType.WELLBEING_CATEGORIES_FAIL,
        Result: { msg: "Categories Not Found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
export function* fetchWellbeingCategoriesPosts({ param }) {
  try {
    console.log("posts of wellbeing categories param", param);
    let response = yield call(ApiMethods.wellbeingCategoriesPostsApi, param);
    // console.log(response, "Wellbeing posts response");
    if (response.status == 1) {
      yield put({
        type: ActionType.WELLBEING_CATEGORIES_POSTS_SUCESS,
        Result: response.result,
      });
    } else {
      yield put({
        type: ActionType.WELLBEING_CATEGORIES_POSTS_FAIL,
        Result: { msg: "Not Found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
export function* fetchSetLikeUnlikePost({ param }) {
  // like/Unlike post
  try {
    let response = yield call(ApiMethods.likeUnlikePostApi, param);
    console.log(response, "RESPONSE LIKE/UNLIKE");
    if (response.status == 1) {
      yield put({
        type: ActionType.LIKE_POST_SUCESS,
        Result: response.result,
        postId: param.postId,
      });
    } else {
      yield put({
        type: ActionType.LIKE_POST_FAIL,
        Result: { msg: "Categories Not Found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
export function* fetchGetPostsComments({ param }) {
  // get post comments
  try {
    let response = yield call(ApiMethods.getPostsCommentsApi, param);
    console.log(response);
    if (response.status == 1) {
      yield put({
        type: ActionType.GET_COMMENTS_SUCESS,
        Result: response.result,
      });
    } else {
      yield put({
        type: ActionType.GET_COMMENTS_FAIL,
        Result: { msg: "Categories Not Found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
export function* fetchSetPostComments({ param }) {
  // set posts comments
  try {
    let response = yield call(ApiMethods.setPostCommentsApi, param);
    if (response.status == 1) {
      console.log("response of set comment ", response);
      yield put({
        type: ActionType.SET_COMMENT_SUCESS,
        Result: response.result,
        postId: param.postId,
      });
    } else {
      yield put({
        type: ActionType.SET_COMMENT_FAIL,
        Result: { msg: "Categories Not Found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}

export function* fetchSetFlagUser({ param }) {
  // set posts comments
  try {
    let response = yield call(ApiMethods.setFlagUserApi, param);
    if (response.status == 1) {
      yield put({
        type: ActionType.SET_FLAG_USER_SUCESS,
        Result: { msg: "User flagged" }
      });
    } else {
      yield put({
        type: ActionType.SET_FLAG_USER_FAIL,
        Result: { msg: "User not found!" },
      });
    }
  } catch (e) {
    yield put({
      type: ActionType.UNKNOWN_ERROR,
      message: "unknown error!",
    });
  }
}
