import { ColItem, ColsType } from "../../modelTypes/colsTypes";
import Row from "./Row";
import { Container, TableWrap, Tbody, Th, THead, TRow } from "./style";
interface PropsTable {
  flex?: string;
  data: [];
  cols: ColsType;
  wraps?: any;
}
const Table = ({ flex, data, cols, wraps }: PropsTable) => {
  return (
    <Container flex={flex}>
      <TableWrap>
        <THead>
          <TRow>
            {cols.map((col) => {
              return <Th>{col.title}</Th>;
            })}
          </TRow>
        </THead>
        <Tbody>
          {data.map((d: ColItem) => (
            <Row item={d} cols={cols} wraps={wraps} />
          ))}
        </Tbody>
      </TableWrap>
    </Container>
  );
};

export default Table;
