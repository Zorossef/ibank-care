import styled from "styled-components";
interface Props {
  isActive?: boolean;
}
export const Item = styled.div<Props>`
  color: ${(p) =>
    p.isActive ? p.theme.colors.lightningYellow : p.theme.colors.silver};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(p) => p.theme.colors.lightningYellow};
    svg {
      fill: ${(p) => p.theme.colors.lightningYellow};
    }
  }
  svg {
    margin-right: 15px;
    width: 18px;
    height: 18px;
    fill: ${(p) =>
      p.isActive ? p.theme.colors.lightningYellow : p.theme.colors.silver};
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
