import { servicesReducer } from "./services/servicesReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  servicesReducer,
});
