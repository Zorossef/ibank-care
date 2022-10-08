import { combineReducers } from "redux";

import menuReducer from "./reducers/menuReducer";
import routesReducer from "./reducers/routesReducer";

export default combineReducers({
  menuReducer,
  routesReducer,
});
