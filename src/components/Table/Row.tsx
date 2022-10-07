import Dots from "../../assets/icons/Dots";
import { ColItem, ColsType } from "../../modelTypes/colsTypes";
import { TRow, Td } from "./style";
interface RowProps {
  item: any;
  cols: any;
  wraps?: any;
}
const Row = ({ item, cols, wraps }: RowProps) => {
  console.info("html");
  const wrap = (name: string) => {
    if (wraps) {
      if (wraps[name]) {
        const Wrap = wraps[name];
        return <Wrap>{item[name]}</Wrap>;
      }
    }
    return item[name];
  };
  return (
    <>
      <TRow>
        {cols.map((col: any) => (
          <Td>{wrap(col.name)}</Td>
        ))}
      </TRow>
    </>
  );
};
export default Row;
