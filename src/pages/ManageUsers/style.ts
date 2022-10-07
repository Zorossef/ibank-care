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
  flex: 0.5;
  color: ${(p) => p.theme.colors.jellyBean};
`;

export const FilterSection = styled.div`
  display: flex;
  flex: 0.5;
  gap: 50px;
`;
export const SecondSection = styled.div`
  display: flex;
  flex: 1;
  margin-top: 30px;
`;
