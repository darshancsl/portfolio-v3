import Header from './components/Header';
import React, { Suspense } from 'react';
import { ThemeProvider } from './themes/ThemeProvider';
import GlobalStyles from './themes/GlobalStyles';
import Sidebar from './components/Sidebar';
import routes from './dataList/routes';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import SidebarOverlay from './components/SideBarOverlay';
import styled from 'styled-components';

const StyledWrapperComp = styled.div`
  display: flex;
  justify-content: center;
`;
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <div className="container">
        <Sidebar />
        <StyledWrapperComp>
          <SidebarOverlay />
          <Routes>
            {routes.map(({ name, path, Component }, index) => {
              return (
                <Route
                  key={index + name}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Routes>
        </StyledWrapperComp>
      </div>
    </ThemeProvider>
  );
};

export default App;
