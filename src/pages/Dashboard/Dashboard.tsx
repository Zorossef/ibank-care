import { useParams } from "react-router-dom";
import { ContentPageWrap } from "../../globalStyle";

const Dashboard = () => {
  const params = useParams();
  console.info("Dashboard================");
  return <ContentPageWrap>Dashboard</ContentPageWrap>;
};
export default Dashboard;
