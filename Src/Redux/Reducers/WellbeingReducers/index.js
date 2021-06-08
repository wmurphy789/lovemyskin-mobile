import * as Actiontypes from '../../ActionTypes'

const INITIAL_STATE = {
    isLoading: false,
    wellBeingCategories: []
}

export const WellbeingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //************************************************>> GET WELLBEING CATEGORIES CASES <<**************************************************/
        case Actiontypes.WELLBEING_CATEGORIES_LOAD: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: true
            }
        }
        case Actiontypes.WELLBEING_CATEGORIES_SUCESS: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: false,
                wellBeingCategories: action.Result.data
            }
        }
        case Actiontypes.WELLBEING_CATEGORIES_FAIL: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: false
            }
        }
        case Actiontypes.WELLBEING_CATEGORIES_ERROR: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: false
            }
        }

         //************************************************>> GET WELLBEING CATEGORIES POSTS CASES <<**************************************************/
        case Actiontypes.WELLBEING_CATEGORIES_POSTS_LOAD: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: true
            }
        }
        case Actiontypes.WELLBEING_CATEGORIES_POSTS_SUCESS: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: false
            }
        }
        case Actiontypes.WELLBEING_CATEGORIES_POSTS_ERROR: {                                               //  GET PROFILE DETAILS SUCESS
            return {
                ...state,
                isLoading: false
            }
        }



        default: {
            return state
        }
    }
}