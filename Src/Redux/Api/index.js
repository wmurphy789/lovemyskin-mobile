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
  return ApiMethod.POST(`trackers`, body);
};
export const editTrackerEntryApi = (info) => {
  const body = info.formData;
  return ApiMethod.PUT(`trackers/${info.id}`, body);
};
// commit
export const getUserProfileApi = (info) => {
  return ApiMethod.GET("users");
};
export const updateProfileApi = (info) => {
  let body = {
    "data": {
      "type": "user",
      "attributes": {
        "first_name": info.fName,
        "last_name": info.lName,
        "email": info.userEmail,
        "username": info.userId
      }
    }
  }
  return ApiMethod.PATCH("users/7e4d1eeb-0cae-4e4f-9726-c9062294da42", body);
};
export const changePasswordApi = (info) => {

  let body = {
    "data": {
      "type": "user",
      "attributes": {
        "current_password": info.oldPassword,
        "password": info.newPassword,
        "confirmation_password": info.confirmNewPassword
      }
    }
  }
  return ApiMethod.PATCH("users/update_password", body);
};

export const wellbeingCategoriesApi = (info) => {
  return ApiMethod.GET("resources");
};

export const wellbeingCategoriesPostsApi = (info) => {
  //type="article"
  let url = 'resources/b2f285b9-ae7d-4383-9e5a-3471fdc43712?page[number]=' + info.from + '&page[size]=' + info.to + '&resoure_type=' + info.type
  // return ApiMethod.GET("resources");
};
