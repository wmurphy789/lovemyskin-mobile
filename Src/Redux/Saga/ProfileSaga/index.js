import { call, put } from "redux-saga/effects";
import { DataManager } from "../../../Support/Datamanager";
import Methods from "../../../Support/Methods";
import { showmessage } from "../../../Support/Validations";
import * as ActionType from '../../ActionTypes'
import * as ApiMethods from '../../Api'

export function* fetchGetProfile({ param }) {                                                         // get doctor details Saga
    try {
        let response = yield call(ApiMethods.getUserProfileApi, param)
        console.log(param, "Nav");
        if (response.status == 1) {
            yield put({ type: ActionType.GET_PROFILE_SUCCESS, Result: response })
        }
        else {
            yield put({ type: ActionType.GET_PROFILE_FAIL, Result: { msg: "Profile Not Found!" } })
            param.navigate("Auth")
            showmessage("Profile not found! please login again.");
        }

    } catch (e) {
        yield put({
            type: ActionType.UNKNOWN_ERROR, message: 'unknown error!'
        });
    }
}

export function* fetchUpdateProfile({ param }) {                                                         // get doctor details Saga
    try {
        let response = yield call(ApiMethods.updateProfileApi, param)
        if (response.status == 1) {
            yield put({ type: ActionType.UPDATE_PROFILE_SUCCESS, Result: response })
            Methods.goBack(param.navigation)
            showmessage("Profile details updated successfully.")
        }
        else if (response.status == 0) {
            yield put({ type: ActionType.UPDATE_PROFILE_FAIL, Result: response })
            param.navigate("Auth")
            showmessage("Profile not found! please login again.");
        }
    } catch (e) {
        yield put({
            type: ActionType.UNKNOWN_ERROR, message: 'unknown error!'
        });
    }
}

export function* fetchChangePassword({ param }) {                                                         // get doctor details Saga
    try {
        let response = yield call(ApiMethods.changePasswordApi, param)
        console.log(response, "RESPONSE CHANGEPASSWORD");
        if (response.status == 1) {
            yield put({ type: ActionType.CHANGE_PASSWORD_SUCESS, Result: response })
            DataManager.clearLocalStorage()
            showmessage("Password changed successfully. Login again")
            Methods.navigate(param.navigation, "Auth")
        }
        else if (response.status == 3) {
            yield put({ type: ActionType.CHANGE_PASSWORD_FAIL, Result: response })
            showmessage("Old credentials wrong.")
        }
        else {
            yield put({ type: ActionType.CHANGE_PASSWORD_FAIL, Result: response })
            showmessage("Something went wrong!")
        }
    } catch (e) {
        yield put({
            type: ActionType.UNKNOWN_ERROR, message: 'unknown error!'
        });
    }
}