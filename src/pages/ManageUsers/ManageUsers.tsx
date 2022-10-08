import { useParams } from "react-router-dom";
import { ContentPageWrap } from "../../globalStyle";
import { Container, FirstSetion, Title } from "./style";

const ManageUsers = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <ContentPageWrap>
      <Container>
        <FirstSetion>
          <Title>User List</Title>
        </FirstSetion>
      </Container>
    </ContentPageWrap>
  );
};
export default ManageUsers;
