import { createSelector } from "reselect";
import { HeaderType } from "../../modelTypes/headerType";
import { MenuList } from "../../modelTypes/menuType";
import { AppRoutes } from "../../modelTypes/routes";
//  const [dataHeader] = stateMenu.routes.list
// .map((m: MenuList) => {
//     return m.listItem.find((l) => l.url === path);
//   })
//   .filter((f: any) => f);
// return {
//   dataHeader,
// };
const headerSelector = (path: string) =>
  createSelector(
    (state: any) => state.routesReducer,
    (stateMenu) => {
      return {
        headerInfo: stateMenu.routes.list.find(
          (l: AppRoutes) => l.path === path
        ),
      };
    }
  );

export default headerSelector;
