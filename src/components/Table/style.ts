import styled from "styled-components";
type PropsStyle = {
  flex?: string;
};
export const Container = styled.div<PropsStyle>`
  display: flex;
  border-radius: 15px;
  border: 1px solid rgba(196, 196, 196, 0.5);
  padding: 38px 34px;
  flex: ${(p) => (p.flex ? p.flex : "1")};
`;

export const TableWrap = styled.table`
  width: 100%;
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  overflow: auto;
`;
export const TRow = styled.tr``;
export const THead = styled.thead`
  position: relative;
`;
export const Th = styled.th`
  color: ${(p) => p.theme.colors.jellyBean};
  height: 43px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 30px 0px;
  text-transform: capitalize;
  text-align: left;
`;

export const Td = styled.td`
  display: table-cell;
  font-size: 0.875rem;
  text-align: left;
  font-weight: 400;
  line-height: 1.43;
  vertical-align: inherit;
  text-align: left;
  color: #005573;
  text-transform: capitalize;
  width: ${(p) => p.width && p.width};
  padding: 30px 0px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.tundora};
`;
