import * as types from "../../ActionTypes";

export const getProfileAction = (param) => ({
    type: types.GET_PROFILE_LOAD,
    param

})
export const updatetProfileAction = (param) => ({
    type: types.UPDATE_PROFILE_LOAD,
    param
})
export const updateProfileImageAction = (param) => ({
    type: types.UPDATE_PROFILE_IMAGE_LOAD,
    param
})
export const changePasswordAction = (param) => ({
    type: types.CHANGE_PASSWORD_LOAD,
    param
})
