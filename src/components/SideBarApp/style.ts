import styled from "styled-components";

interface Props {
  displayMenu?: boolean;
  isActive?: boolean;
}

export const TopSection = styled.div`
  display: flex;
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

export const BottomSection = styled.div`
  display: flex;
  color: ${(p) => p.theme.colors.silver};
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.lightningYellow};
    svg {
      fill: ${(p) => p.theme.colors.lightningYellow};
    }
  }
  svg {
    margin-right: 15px;
    width: 22px;
    height: 22px;
  }
`;
export const Divider = styled.div`
  background-color: rgba(196, 196, 196, 0.5);
  height: 1px;
`;
export const GeneralItem = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  /* flex: ${(p) => p.displayMenu && "0.5"}; */
  /* justify-content: space-evenly; */
  margin-bottom: 15px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.white};
  padding: 55px 30px 55px 23px;
  justify-content: space-between;
  min-width: 250px;
  ${GeneralItem}:last-child {
    ${Divider} {
      display: none;
    }
  }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => p.theme.colors.tealBlue};
  margin-left: 15px;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  /* flex: 0.6; */
  justify-content: space-between;
`;

export const OtherItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const TitleOther = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => p.theme.colors.tealBlue};
  margin-left: 15px;
  margin-bottom: 25px;
  margin-top: 30px;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
