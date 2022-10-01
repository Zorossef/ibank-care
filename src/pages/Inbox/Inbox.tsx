import { useParams } from "react-router-dom";

const Inbox = () => {
  const params = useParams();
  console.log("params", params);
  return <>Inbox</>;
};
export default Inbox;
