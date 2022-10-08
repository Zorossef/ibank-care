import { getMock } from "../config/api-client";
import { menuList } from "../mockups/menu";
import { routes } from "../mockups/routes";

export const getMenuList = () => {
  return getMock(menuList);
};

export const getRoutesList = () => {
  return getMock(routes);
};
