import { AnyAction } from "redux";
import { AppRoutes } from "../../modelTypes/routes";
import * as types from "../actionsTypes";
interface RoutesReducerProps {
  routes: {
    list: Array<AppRoutes>;
    loading: boolean;
  };
}
const initialState: RoutesReducerProps = {
  routes: {
    list: [],
    loading: false,
  },
};

const routesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_LIST_ROUTES_REQUEST:
      return {
        ...state,
        routes: {
          ...state.routes,
          loading: true,
        },
      };
    case types.SET_LIST_ROUTES:
      return {
        ...state,
        routes: {
          ...state.routes,
          list: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
export default routesReducer;
