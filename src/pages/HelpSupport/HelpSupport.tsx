import { useParams } from "react-router-dom";

const HelpSupport = () => {
  const params = useParams();
  console.log("params", params);
  return <>Help Support</>;
};
export default HelpSupport;
