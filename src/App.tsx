import { useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import SideBarApp from "./components/SideBarApp";
import { theme } from "./config/style";
import { FullContainer, ContainerContent, ContentApp } from "./globalStyle";
import { routes } from "./mockups/routes";
import { AppRoutes } from "./modelTypes/routes";

function App() {
  console.info("App ====================");

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FullContainer>
          <ContainerContent>
            <SideBarApp />
            <ContentApp>
              <Header />
              <Routes>
                {routes.map((rt: AppRoutes) => {
                  const Element = rt.element;
                  return <Route path={rt.path} element={<Element />} />;
                })}
              </Routes>
            </ContentApp>
          </ContainerContent>
        </FullContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
