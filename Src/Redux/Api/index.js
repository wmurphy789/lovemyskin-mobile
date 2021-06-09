import ApiMethod from "./ApiMethods";

export const loginApi = (info) => {
  let body = {
    auth: {
      email: info.email,
      password: info.password,
    },
  };
  return ApiMethod.POST("user_token", body);
};

export const signupApi = (info) => {
  let body = {
    email: info.email,
    password: info.password,
    confirmation_password: info.confirmPassword,
  };
  return ApiMethod.POST("users", body);
};
export const updtaeQuestionIdApi = (info) => {
  let body = {
    data: {
      type: "user",
      attributes: {
        // Can be 0,1,2
        question_id: info,
      },
    },
  };
  return ApiMethod.PATCH("users/answer_question", body);
};
export const getAffirmationApi = (info) => {
  return ApiMethod.GET("affirmations", null);
};
export const getAffirmationByIdApi = (info) => {
  return ApiMethod.GET(`affirmations/${info.id}`, null);
};
export const createAffirmationApi = (info) => {
  let body = {
    data: {
      type: "affirmation",
      attributes: {
        description: info.description,
      },
    },
  };
  return ApiMethod.POST("affirmations", body);
};
export const getTrackerEntryApi = (info) => {
  return ApiMethod.GET(
    `trackers?start_date=${info.startDate}&end_date=${info.endDate}`,
    null
  );
};
export const getTrackerAllEntryApi = (info) => {
  return ApiMethod.GET(
    `trackers?start_date=${info.startDate}&end_date=${info.endDate}`,
    null
  );
};

export const deleteTrackerEntryApi = (info) => {
  return ApiMethod.DELETE(`trackers/${info.id}`, null);
};
export const createTrackerEntryApi = (info) => {
  const body = info;
  return ApiMethod.POST_FORMDATA(`trackers`, body);
};
export const editTrackerEntryApi = (info) => {
  const body = info.formData;
  return ApiMethod.PUT_FORMDATA(`trackers/${info.id}`, body);
};

export const submitFeedbackAutodrumApi = (info) => {
  const body = info.formData;
  return ApiMethod.POST_AUTODROM(
    `query?model=autoderm_v2_0&language=en&simple_names=false`,
    body
  );
};

export const deleteAffirmationApi = (info) => {
  return ApiMethod.DELETE(`affirmations/${info.id}`, null);
};
export const updateAffirmationApi = (info) => {
  let body = {
    data: {
      type: "affirmation",
      attributes: {
        description: info?.description,
      },
    },
  };
  return ApiMethod.PUT(`affirmations/${info?.id}`, body);
};

export const getUserProfileApi = (info) => {
  return ApiMethod.GET("users");
};
export const updateProfileApi = (info) => {
  let body = {
    data: {
      type: "user",
      attributes: {
        first_name: info?.fName,
        last_name: info?.lName,
        // email: info.userEmail,
        username: info?.userId,
      },
    },
  };
  return ApiMethod.PATCH(`users/${info?.id}`, body);
};
export const updateProfileImageApi = (body) => {
  return ApiMethod.POST_FORMDATA("users/update_profile_photo", body);
};
export const changePasswordApi = (info) => {
  let body = {
    data: {
      type: "user",
      attributes: {
        current_password: info.oldPassword,
        password: info.newPassword,
        confirmation_password: info.confirmNewPassword,
      },
    },
  };
  return ApiMethod.PATCH("users/update_password", body);
};

export const wellbeingCategoriesApi = (info) => {
  return ApiMethod.GET("resources");
};

export const wellbeingCategoriesPostsApi = (info) => {
  //type="article"
  let url =
    "resources/" +
    info.categoryId +
    "?page[number]=" +
    info.from +
    "&page[size]=" +
    info.to +
    "&resoure_type=" +
    info.type;
  // return ApiMethod.GET("resources");
};
