import * as types from "../../ActionTypes";
export const getWellbeingCategories = (param) => ({
    type: types.WELLBEING_CATEGORIES_LOAD,
    param
})
export const getCategoriesPosts = (param) => ({
    type: types.WELLBEING_CATEGORIES_POSTS_LOAD,
    param
})
export const likeUnlikePost = (param) => ({
    type: types.LIKE_POST_LOAD,
    param
})
export const getPostsComments = (param) => ({
    type: types.GET_COMMENTS_LOAD,
    param
})
export const setPostComments = (param) => ({
    type: types.SET_COMMENT_LOAD,
    param
})
export const setFlagUser = (param) => ({
    type: types.SET_FLAG_USER_LOAD,
    param
})