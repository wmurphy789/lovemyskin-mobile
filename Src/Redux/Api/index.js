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
