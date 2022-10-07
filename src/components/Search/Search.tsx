import SearchIcon from "../../assets/icons/SeachIcon";
import { Container, IconWrap, Input } from "./style";

const Search = () => {
  return (
    <Container>
      <IconWrap>
        <SearchIcon />
      </IconWrap>
      <Input placeholder="Search ..." />
    </Container>
  );
};
export default Search;
