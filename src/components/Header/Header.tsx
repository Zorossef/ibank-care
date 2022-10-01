import Notif from "../../assets/icons/Notif";
import ProfileImage from "../../assets/images/profile.jpeg";
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
  console.info("Header======================");

  return (
    <Container>
      <InfoPage>
        <Title>Title</Title>
        <Slug>Slug</Slug>
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
