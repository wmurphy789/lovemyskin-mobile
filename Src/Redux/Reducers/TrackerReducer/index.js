import moment from "moment";
import * as types from "../../ActionTypes";

const initialState = {
  onLoad: false,
  isDisable: false,
  isDeleted: false,
  allEntry: [],
  entry: {},
  totalEntry: 0,
  totalPercentage: 0,
  selectedDate: moment(),
};

export const TrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    //get all entry
    case types.API_GET_TRACKER_ENTRY_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_GET_TRACKER_ENTRY_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        entry: action.data[0] ? action.data[0] : {},
      };
    case types.API_GET_TRACKER_ENTRY_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //get all entry
    case types.API_GET_TRACKER_ALL_ENTRY_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_GET_TRACKER_ALL_ENTRY_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        allEntry: filterAllEntries(action.data, action.selectedDate),
        entry: filterEntry(action.data, action.selectedDate),
        totalEntry: action?.meta?.entries_this_month,
        totalPercentage: action?.meta?.percent_entries,
        selectedDate: action.selectedDate,
      };
    case types.API_GET_TRACKER_ALL_ENTRY_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //delete entry
    case types.API_DELETE_TRACKER_ENTRY_START:
      return { ...state, isDisable: true, onLoad: true, isDeleted: false };
    case types.API_DELETE_TRACKER_ENTRY_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        isDeleted: true,
        selectedDate: action.selectedDate,
      };
    case types.API_DELETE_TRACKER_ENTRY_ERROR:
      return { ...state, isDisable: false, onLoad: false, isDeleted: false };

    //edit entry
    case types.API_EDIT_TRACKER_ENTRY_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_EDIT_TRACKER_ENTRY_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        selectedDate: action.selectedDate,
      };
    case types.API_EDIT_TRACKER_ENTRY_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    //create entry
    case types.API_CREATE_TRACKER_ENTRY_START:
      return { ...state, isDisable: true, onLoad: true };
    case types.API_CREATE_TRACKER_ENTRY_SUCCESS:
      return {
        ...state,
        isDisable: false,
        onLoad: false,
        selectedDate: action.selectedDate,
      };
    case types.API_CREATE_TRACKER_ENTRY_ERROR:
      return { ...state, isDisable: false, onLoad: false };

    default:
      return { ...state };
  }
};

const filterAllEntries = (data, date) => {
  const selectedDateMonth = moment(date).get("M") + 1;
  const selectedDateYear = moment(date).get("Y");
  const NoOfdaysInSelectedMonth = moment(date).daysInMonth();
  let firstDayOfMonth = moment(
    selectedDateMonth + "/" + "01/" + selectedDateYear
  );
  var daysInSelectedMonth = [];
  var firstday = data.findIndex(function (item) {
    return (
      moment(item.attributes.entry_date).format("YYYY-MM-DD") ===
      moment(firstDayOfMonth).format("YYYY-MM-DD")
    );
  });
  daysInSelectedMonth.push({
    id: data[firstday]?.id,
    date: moment(selectedDateMonth + "/" + "01/" + selectedDateYear),
    text: data[firstday]?.attributes?.feeling,
    smile:
      firstday == -1
        ? 3
        : data[firstday]?.attributes?.feeling == "good"
        ? 0
        : data[firstday]?.attributes?.feeling == "bad"
        ? 1
        : 2,
    subText: data[firstday]?.attributes?.description,
    image: data[firstday]?.attributes?.image,
  });
  for (let index = 0; index < NoOfdaysInSelectedMonth - 1; index++) {
    var filterday = data.findIndex(function (item) {
      return (
        moment(item.attributes.entry_date).format("YYYY-MM-DD") ===
        moment(daysInSelectedMonth[index].date)
          .add(1, "day")
          .format("YYYY-MM-DD")
      );
    });
    daysInSelectedMonth.push({
      id: data[filterday]?.id,
      date: moment(daysInSelectedMonth[index].date).add(1, "day"),
      text: data[filterday]?.attributes?.feeling,
      smile:
        filterday == -1
          ? 3
          : data[filterday]?.attributes?.feeling == "good"
          ? 0
          : data[filterday]?.attributes?.feeling == "bad"
          ? 1
          : 2,
      subText: data[filterday]?.attributes?.description,
      image: data[filterday]?.attributes?.image,
    });
  }
  return daysInSelectedMonth;
};
const filterEntry = (data, date) => {
  var newArray = data.filter(function (item) {
    return (
      moment(item.attributes.entry_date).format("YYYY-MM-DD") ===
      moment(date).format("YYYY-MM-DD")
    );
  });
  return newArray.length > 0 ? newArray[0] : {};
};
