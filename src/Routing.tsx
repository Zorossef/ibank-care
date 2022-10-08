import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./modelTypes/routes";
import { getListRoutesAction } from "./redux/actions/menuActions";
import { useAppDispatch } from "./redux/hooks-redux";
import routesSelector from "./redux/selectors/routesSelector";

const Routing = () => {
  const dispatch: (obj: any) => void = useAppDispatch();
  const { routesList } = useSelector(routesSelector);
  useEffect(() => {
    dispatch(getListRoutesAction());
  }, []);
  console.info("routesList", routesList);
  return (
    <Routes>
      {routesList.map((rt: AppRoutes) => {
        const Element = rt.element;
        return <Route path={rt.path} element={<Element />} />;
      })}
    </Routes>
  );
};

export default Routing;
