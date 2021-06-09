import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducers";
import { AffirmationReducer } from "./AffirmationReducers";
import { TrackerReducer } from "./TrackerReducer";
import { submitFeedbackAutodrumReducer } from "./SkinDiagonseReducer";
import { ProfileReducer } from "./ProfileReducer"
import { WellbeingReducer } from "./WellbeingReducers"
const appReducer = combineReducers({
  AuthReducer,
  AffirmationReducer,
  TrackerReducer,
  submitFeedbackAutodrumReducer,
  ProfileReducer,
  WellbeingReducer
});
const rootReducer = (state, action) => {
  //   if (action.type === types.API_ADMIN_LOGIN_START) {
  //     state = undefined
  //   }
  return appReducer(state, action);
};
export default rootReducer;
