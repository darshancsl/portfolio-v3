import Header from './components/Header';
import React from 'react';
import { ThemeProvider } from './themes/ThemeProvider';
import GlobalStyles from './themes/GlobalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
