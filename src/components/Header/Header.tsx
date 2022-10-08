import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Notif from "../../assets/icons/Notif";
import ProfileImage from "../../assets/images/profile.jpeg";
import headerSelector from "../../redux/selectors/headerSelector";
import {
  Container,
  Slug,
  Title,
  InfoPage,
  InfoUserNotif,
  NotifWrap,
  UserImage,
  Img,
} from "./style";

const Header = () => {
  const location = useLocation();
  const { headerInfo } = useSelector(headerSelector(location.pathname));

  return (
    <Container>
      <InfoPage>
        <Title>{headerInfo?.title}</Title>
        <Slug>{headerInfo?.slug}</Slug>
      </InfoPage>
      <InfoUserNotif>
        <NotifWrap>
          <Notif />
        </NotifWrap>
        <UserImage>
          <Img src={ProfileImage} alt="image" />
        </UserImage>
      </InfoUserNotif>
    </Container>
  );
};

export default Header;
