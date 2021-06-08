import { call, put } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import Methods from "../../../Support/Methods";
import { showmessage } from "../../../Support/Validations";
import * as ActionType from '../../ActionTypes'
import * as ApiMethods from '../../Api'

export function* fetchWellbeingCategories({ param }) {                                                         // get doctor details Saga
    try {
        let response = yield call(ApiMethods.wellbeingCategoriesApi, param)
        if (response.status == 1) {
            yield put({ type: ActionType.WELLBEING_CATEGORIES_SUCESS, Result: response.result })
        }
        else {
            yield put({ type: ActionType.WELLBEING_CATEGORIES_FAIL, Result: { msg: "Categories Not Found!" } })
        }

    } catch (e) {
        yield put({
            type: ActionType.UNKNOWN_ERROR, message: 'unknown error!'
        });
    }
}
export function* fetchWellbeingCategoriesPosts({ param }) {                                                         // get doctor details Saga
    try {
        let response = yield call(ApiMethods.wellbeingCategoriesApi, param)
        console.log(response, "Wellbeing posts response");
        if (response.status == 1) {
            yield put({ type: ActionType.WELLBEING_CATEGORIES_POSTS_SUCESS, Result: response.result })
        }
        else {
            yield put({ type: ActionType.WELLBEING_CATEGORIES_POSTS_FAIL, Result: { msg: "Not Found!" } })
        }

    } catch (e) {
        yield put({
            type: ActionType.UNKNOWN_ERROR, message: 'unknown error!'
        });
    }
}