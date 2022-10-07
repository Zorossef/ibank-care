import { AnyAction } from "redux";
import { UserItemType } from "../../modelTypes/managerUsersType";
import * as types from "../actionsTypes";

interface ManagerUsersProps {
  users: {
    list: Array<UserItemType>;
    loading: boolean;
  };
}

const initialState = {
  users: {
    list: [],
    loading: false,
  },
};

const managerUsersReducer = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case types.GET_USER_LIST_REQUEST:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    case types.SET_USER_LIST:
      return {
        ...state,
        users: {
          ...state.users,
          list: payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
export default managerUsersReducer;
