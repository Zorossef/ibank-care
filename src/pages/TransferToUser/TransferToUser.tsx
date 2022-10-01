import { useLocation } from "react-router-dom";

const TransferToUser = () => {
  const params = useLocation();
  console.log("params", params);
  return <>Transfer to User</>;
};
export default TransferToUser;
