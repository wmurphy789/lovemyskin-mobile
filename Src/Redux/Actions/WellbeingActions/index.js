import * as types from "../../ActionTypes";
export const getWellbeingCategories = (param) => ({
    type: types.WELLBEING_CATEGORIES_LOAD,
    param
})
export const getCategoriesPosts = (param) => ({
    type: types.WELLBEING_CATEGORIES_POSTS_LOAD,
    param
})