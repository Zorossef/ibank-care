import { AnyAction } from "redux";
import { MenuList } from "../../modelTypes/menuType";
import * as types from "../actionsTypes";

interface MenuReducer {
  menu: {
    list: Array<MenuList>;
    loading: boolean;
    selectedItem: string;
  };
}

const initialState: MenuReducer = {
  menu: {
    list: [],
    loading: false,
    selectedItem: "",
  },
};

const menuReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case types.GET_MENU_LIST_REQUEST:
      return {
        ...state,
        menu: {
          ...state.menu,
          loading: true,
        },
      };
    case types.SET_MENU_LIST:
      return {
        ...state,
        menu: {
          ...state.menu,
          list: payload,
          loading: false,
        },
      };
    case types.SET_SELETED_ITEM:
      return {
        ...state,
        menu: {
          ...state.menu,
          selectedItem: payload,
        },
      };
    default:
      return state;
  }
};

export default menuReducer;
