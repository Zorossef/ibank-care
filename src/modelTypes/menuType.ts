import { FC } from "react";

export type ItemType = {
  name: string;
  icon: FC;
  isActive?: boolean;
  url: string;
};
export interface MenuList {
  title: string;
  listItem: Array<ItemType>;
}
