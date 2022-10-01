import { AppRoutes } from "../modelTypes/routes";
import Dashboard from "../pages/Dashboard";
import HelpSupport from "../pages/HelpSupport";
import History from "../pages/History";
import Inbox from "../pages/Inbox";
import ManageUsers from "../pages/ManageUsers";
import TransferToUser from "../pages/TransferToUser";

export const routes: Array<AppRoutes> = [
  {
    exact: true,
    path: "/",
    element: Dashboard,
    title: "Dashboard",
  },
  {
    path: "/manage-users",
    element: ManageUsers,
    title: "Manage Users",
    slug: "Manage and organize your users",
  },
  {
    path: "/transfer-to-user",
    element: TransferToUser,
    title: "Transfer to Users",
    slug: "Transfers balance to your users",
  },
  {
    path: "/history",
    element: History,
    title: "History Transfer",
    slug: "see history a transfer from user to user and from admin to users",
  },
  {
    path: "/inbox",
    element: Inbox,
    title: "inbox",
  },
  {
    path: "/help-support",
    element: HelpSupport,
    title: "Manage Users",
  },
];
