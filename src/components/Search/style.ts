import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px 0px 10px 14px;
  box-shadow: 0px 10px 15px rgba(151, 151, 151, 0.08);
  border-radius: 10px;
  align-items: center;
`;

export const IconWrap = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;
  color: ${(p) => p.theme.colors.stroke};
  outline: none;
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: ${(p) => p.theme.colors.osloGray};
  }
`;
