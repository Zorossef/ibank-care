import styled from "styled-components";

interface PropStyle {
  displayMenu?: boolean;
  selectedOption?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectWrap = styled.div`
  display: flex;
  width: 150px;
  height: 40px;
  cursor: pointer;
  /* padding: 0px 20px; */
  border-radius: 25px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.alabaster};
`;
export const SelectMenu = styled.div`
  display: flex;
  padding: 0px 35px;
  font-weight: 600;
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;
export const Title = styled.span`
  color: ${(p) => p.theme.colors.tundora};
  font-size: 14px;
`;
export const OptionsList = styled.div<PropStyle>`
  display: ${(p) => (p.displayMenu ? "flex" : "none")};
  position: absolute;
  width: inherit;
  border-radius: 6px;
  margin-top: auto;
  padding: 10px 0px;
  max-height: 80px;
  overflow-y: auto;
  -webkit-transition: 0.4s linear 0.2s;
  transition: 0.4s linear 0.2s;
  flex-direction: column;
  flex: 1;
  top: 45px;
  /* left: 8px; */
  background-color: ${(p) => p.theme.colors.alabaster};
`;
export const Option = styled.div<PropStyle>`
  color: ${(p) => p.theme.colors.tundora};
  padding: 8px 20px;
  font-weight: 500;
  font-size: 14px;
  transition: 0.3s ease-in-out;
  background-color: ${(p) =>
    p.selectedOption ? p.theme.colors.lightningYellow : "unset"};
  &:hover {
    background-color: ${(p) => p.theme.colors.lightningYellow};
  }
`;
