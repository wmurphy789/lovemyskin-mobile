import * as types from "../../ActionTypes";

export const getTrackerEntryAction = (info, navigation) => {
  const action = {
    type: types.API_GET_TRACKER_ENTRY_LOAD,
    payload: info,
    navigation,
  };
  return action;
};

export const getTrackerALLEntryAction = (info, navigation) => {
  const action = {
    type: types.API_GET_TRACKER_ALL_ENTRY_LOAD,
    payload: info,
    navigation,
  };
  return action;
};

export const deleteTrackerEntryAction = (info, navigation) => {
  const action = {
    type: types.API_DELETE_TRACKER_ENTRY_LOAD,
    payload: info,
    navigation,
  };
  return action;
};

export const editTrackerEntryAction = (info, navigation) => {
  const action = {
    type: types.API_EDIT_TRACKER_ENTRY_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
export const createTrackerEntryAction = (info, navigation) => {
  const action = {
    type: types.API_CREATE_TRACKER_ENTRY_LOAD,
    payload: info,
    navigation,
  };
  return action;
};
