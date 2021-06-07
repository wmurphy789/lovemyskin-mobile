import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducers";
import { AffirmationReducer } from "./AffirmationReducers";
import { TrackerReducer } from "./TrackerReducer";
const appReducer = combineReducers({
  AuthReducer,
  AffirmationReducer,
  TrackerReducer,
});
const rootReducer = (state, action) => {
  //   if (action.type === types.API_ADMIN_LOGIN_START) {
  //     state = undefined
  //   }
  return appReducer(state, action);
};
export default rootReducer;
