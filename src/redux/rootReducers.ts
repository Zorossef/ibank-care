import { combineReducers } from "redux";

import menuReducer from "./reducers/menuReducer";
import routesReducer from "./reducers/routesReducer";
import managerUsers from "./reducers/managerUsersReducer";
export default combineReducers({
  menuReducer,
  routesReducer,
  managerUsers,
});
