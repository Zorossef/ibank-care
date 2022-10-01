import { getMock } from "../config/api-client";
import { menuList } from "../mockups/menu";

export const getMenuList = () => {
  return getMock(menuList);
};
