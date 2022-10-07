import { getMock } from "../config/api-client";
import { userList } from "../mockups/managerUsers";

export const getListUsers = () => {
  return getMock(userList);
};
