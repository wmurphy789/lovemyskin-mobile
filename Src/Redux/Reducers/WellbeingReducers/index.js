import * as Actiontypes from "../../ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  loader: false,
  wellBeingCategories: [],
  wellBeingApiSucess: false,
  postsApiSucess: false,
  wellbeingPosts: [],
  postsLoading: false,
  likeApiSucess: false,
  postComments: [],
  expandedPostId: null,
};

export const WellbeingReducer = (state = INITIAL_STATE, action) => {
  console.log("action of reducer", action);
  switch (action.type) {
    //************************************************>> GET WELLBEING CATEGORIES CASES <<**************************************************/
    case Actiontypes.WELLBEING_CATEGORIES_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: true,
        wellBeingApiSucess: false,
      };
    }
    case Actiontypes.WELLBEING_CATEGORIES_SUCESS: {
      return {
        ...state,
        isLoading: true,
        wellBeingCategories: action.Result.data,
        wellBeingApiSucess: true,
      };
    }
    case Actiontypes.WELLBEING_CATEGORIES_FAIL: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
        wellBeingApiSucess: false,
      };
    }
    case Actiontypes.WELLBEING_CATEGORIES_ERROR: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
        wellBeingApiSucess: false,
      };
    }

    //************************************************>> GET WELLBEING CATEGORIES POSTS CASES <<**************************************************/
    case Actiontypes.WELLBEING_CATEGORIES_POSTS_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        wellbeingPosts: [],
        postComments:[],
        // isLoading: true,
        postsApiSucess: false,
        postsLoading: true,
      };
    }
    case Actiontypes.WELLBEING_CATEGORIES_POSTS_SUCESS: {
      //  GET PROFILE DETAILS SUCESS

      return {
        ...state,
        isLoading: false,
        wellbeingPosts: action.Result.data,
        postsApiSucess: true,
        postsLoading: false,
      };
    }
    case Actiontypes.WELLBEING_CATEGORIES_POSTS_ERROR: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
      };
    }
    //---------
    case Actiontypes.LIKE_POST_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        loader: true,
        // likeApiSucess: false,
        postsApiSucess: false,
      };
    }
    case Actiontypes.LIKE_POST_SUCESS: {
      //  GET PROFILE DETAILS SUCESS
      let arr1 = [...state.wellbeingPosts];

      console.log("arr", arr1);
      let item = arr1.findIndex((element) => element?.id == action?.postId);
      console.log("item at success marked nurse", item);
      if (item > -1) {
        arr1[item] = action.Result.data;
        console.log("updated comment count", arr1);
      }

      return {
        ...state,
        loader: false,
        // likeApiSucess: true,
        wellbeingPosts: [...arr1],
        // wellBeingApiSucess: true,
        postsApiSucess: true,
      };
    }
    case Actiontypes.LIKE_POST_FAIL: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        loader: false,
        // likeApiSucess: false,
        // wellBeingApiSucess: false,
        postsApiSucess: false,
      };
    }
    //-------------
    case Actiontypes.SET_COMMENT_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actiontypes.SET_COMMENT_SUCESS: {
      //  GET PROFILE DETAILS SUCESS

      console.log("item at success marked nurse", action.postId);

      let arr1 = [...state.wellbeingPosts];

      console.log("arr", arr1);
      let item = arr1.findIndex((element) => element.id == action.postId);
      console.log("item at success marked nurse", item);
      if (item > -1) {
        arr1[item].attributes.comment_count = action.Result.meta.comment_count;
        console.log("updated comment count", arr1);
      }
      //commm
      console.log("action", action?.Result);
      let arr = [...state.postComments];
      arr.push(action?.Result?.data);

      console.log("updated array of comments", arr);

      return {
        ...state,
        isLoading: false,
        postComments: arr,
        wellbeingPosts: arr1,
      };
    }
    case Actiontypes.SET_COMMENT_FAIL: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
      };
    }
    //--------------
    case Actiontypes.GET_COMMENTS_LOAD: {
      //  GET PROFILE DETAILS SUCESS
      console.log(action.param.postId, "action data");
      return {
        ...state,
        // postComments:[],
        // isLoading: true,
        expandedPostId: action.param.postId,
      };
    }
    case Actiontypes.GET_COMMENTS_SUCESS: {
      //  GET PROFILE DETAILS SUCESS
      console.log(action.Result.data, "data");

      return {
        ...state,
        isLoading: false,
        postComments: action?.Result?.data,
      };
    }
    case Actiontypes.GET_COMMENTS_FAIL: {
      //  GET PROFILE DETAILS SUCESS
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
