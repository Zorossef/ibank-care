import { AnyAction } from "redux";
import { createSelector } from "reselect";
import { HeaderType } from "../../modelTypes/headerType";
import { AppRoutes } from "../../modelTypes/routes";

const routesSelector = createSelector(
  (state: AnyAction) => state.routesReducer,
  (stateRoutes) => {
    return {
      routesList: stateRoutes.routes.list,
    };
  }
);

export default routesSelector;
