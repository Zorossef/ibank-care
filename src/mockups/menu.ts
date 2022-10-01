import Chart from "../assets/icons/Chart";
import Help from "../assets/icons/help";
import Home from "../assets/icons/Home";
import Inbox from "../assets/icons/Inbox";
import Profile from "../assets/icons/Profile";
import Switch from "../assets/icons/Switch";
import { MenuList } from "../modelTypes/menuType";

export const menuList: Array<MenuList> = [
  {
    title: "General",
    listItem: [
      { name: "Dashboard", url: "/", icon: Home },
      { name: "Manage Users", url: "/manage-users", icon: Profile },
      { name: "Transfer to Users", url: "/transfer-to-user", icon: Switch },
      { name: "History", url: "/history", icon: Chart },
      { name: "Inbox", url: "/inbox", icon: Inbox },
    ],
  },
  {
    title: "Other",
    listItem: [{ name: "Help & Support", url: "/help-support", icon: Help }],
  },
];
