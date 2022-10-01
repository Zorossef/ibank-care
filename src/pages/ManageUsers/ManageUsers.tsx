import { useParams } from "react-router-dom";

const ManageUsers = () => {
  const params = useParams();
  console.log("params", params);
  return <>Manage Users</>;
};
export default ManageUsers;
