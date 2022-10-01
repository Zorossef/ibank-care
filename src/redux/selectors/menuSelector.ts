import { createSelector } from "reselect";
import { MenuList } from "../../modelTypes/menuType";

const menuSelector = (path: string) =>
  createSelector(
    (state: any) => state.menuReducer,
    (stateMenu) => {
      return {
        menuList: stateMenu.menu.list.map((m: MenuList) => {
          return {
            ...m,
            listItem: m.listItem.map((l) => {
              if (l.url === path) {
                return {
                  ...l,
                  isActive: true,
                };
              }
              return l;
            }),
          };
        }),
        loading: stateMenu.menu.loading,
      };
    }
  );

export default menuSelector;
