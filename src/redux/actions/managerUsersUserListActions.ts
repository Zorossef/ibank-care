import { AnyAction } from "redux";
import * as types from "../actionsTypes";
import * as services from "../../services/managerUsersServices";

export const getListUsersAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: types.GET_USER_LIST_REQUEST,
    });

    const result: any = await services.getListUsers();
    try {
      dispatch({
        type: types.SET_USER_LIST,
        payload: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
