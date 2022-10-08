import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import SideBarApp from "./components/SideBarApp";
import { theme } from "./config/style";
import { FullContainer, ContainerContent, ContentApp } from "./globalStyle";
import Routing from "./Routing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FullContainer>
          <ContainerContent>
            <SideBarApp />
            <ContentApp>
              <Header />
              {/* <Routes>
                {routes.map((rt: AppRoutes) => {
                  const Element = rt.element;
                  return <Route path={rt.path} element={<Element />} />;
                })}
              </Routes> */}
              <Routing />
            </ContentApp>
          </ContainerContent>
        </FullContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
