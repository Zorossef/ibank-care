import styled from "styled-components";
import { colors } from "../config/style";

export const FullContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.alabaster};
  display: flex;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex: 1;
`;

export const ContentApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 35px;
  flex: 1;
`;
export const ContentPageWrap = styled.div`
  display: flex;
  margin-top: 45px;
`;
