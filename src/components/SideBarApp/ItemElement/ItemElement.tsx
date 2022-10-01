import { memo, FC } from "react";
import { Item, IconWrap } from "./style";
import { ItemType } from "../../../modelTypes/menuType";

interface ItemElemType {
  item: ItemType;
  onClick: (url: string) => void;
  testFn?: () => void;
}
const ItemElement: FC<ItemElemType> = memo(({ item, onClick }) => {
  console.info("ITEM #####", item.name);
  const Icon = item.icon;

  return (
    <Item onClick={() => onClick(item.url)} isActive={item?.isActive}>
      <IconWrap>
        <Icon />
      </IconWrap>
      {item.name}
    </Item>
  );
});
export default memo(ItemElement);
