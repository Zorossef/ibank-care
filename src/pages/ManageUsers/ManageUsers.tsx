import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actions from "../../components/Actions";
import Search from "../../components/Search";
import Select from "../../components/Select";
import Table from "../../components/Table";
import { USER_LIST_FILTER, USER_LIST_SORT } from "../../config/select-options";
import { ContentPageWrap } from "../../globalStyle";
import { getListUsersAction } from "../../redux/actions/managerUsersUserListActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks-redux";
import userListSelector from "../../redux/selectors/userListSelectors";
import {
  Container,
  FirstSetion,
  Title,
  FilterSection,
  SecondSection,
} from "./style";

const wraps = {
  actions: Actions,
};

const ManageUsers = () => {
  const { userList, cols } = useAppSelector(userListSelector);
  const dispatch: (obj: any) => void = useAppDispatch();
  const [details, setDetails] = useState<String>("");
  const params = useParams();
  useEffect(() => {
    dispatch(getListUsersAction());
  }, []);
  console.log("params", params);
  console.info("list of users", userList);
  return (
    <ContentPageWrap>
      <Container>
        <FirstSetion>
          <Title>User List</Title>
          <FilterSection>
            <Search />
            <Select text="Filter By" data={USER_LIST_FILTER} />
            <Select text="Sort By" data={USER_LIST_SORT} />
          </FilterSection>
        </FirstSetion>
        <SecondSection>
          <Table data={userList} cols={cols} wraps={wraps} />
        </SecondSection>
      </Container>
    </ContentPageWrap>
  );
};
export default ManageUsers;
