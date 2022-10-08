import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  flex: 1;
  padding: 34px 34px 34px 36px;
  background-color: ${(p) => p.theme.colors.white};
`;

export const FirstSetion = styled.div`
  display: flex;
  flex: 1;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  color: ${(p) => p.theme.colors.jellyBean};
`;
