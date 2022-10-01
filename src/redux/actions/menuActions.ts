import * as types from "../actionsTypes";
import * as services from "../../services/menuServices";

export const getMenuListAction = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: types.GET_MENU_LIST_REQUEST,
  });

  try {
    const result: any = await services.getMenuList();
    dispatch({
      type: types.SET_MENU_LIST,
      payload: result.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const setSelectedItem =
  (item: string) => (dispatch: any, getState: any) => {
    dispatch({
      type: types.SET_SELETED_ITEM,
      payload: item,
    });
  };
