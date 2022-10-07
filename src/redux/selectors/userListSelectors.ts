import { AnyAction } from "redux";
import { createSelector } from "reselect";
import { ColsType } from "../../modelTypes/colsTypes";
const cols: ColsType = [
  { title: "name", name: "name" },
  { title: "user name", name: "userName" },
  { title: "Account Number", name: "AccountNumber" },
  { title: "swift Code", name: "swiftCode" },
  { title: "name", name: "name" },
  { title: "", name: "actions" },
];

const userListSelector = createSelector(
  (state: any) => state.managerUsers.users,
  (stateUsers) => {
    return {
      userList: stateUsers.list,
      loading: stateUsers.loading,
      cols: cols,
    };
  }
);

export default userListSelector;
