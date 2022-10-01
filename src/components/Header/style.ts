import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${(p) => p.theme.colors.tealBlue};
`;

export const Slug = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.colors.osloGray};
  margin-top: 8px;
`;

export const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoUserNotif = styled.div`
  display: flex;
`;

export const NotifWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  cursor: pointer;
`;
export const Img = styled.img`
  border-radius: 50%;
  width: inherit;
  height: inherit;
`;
