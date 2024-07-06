// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { ThemeProvider } from '../themes/ThemeProvider';
import GlobalStyles from '../themes/GlobalStyles';

jest.mock('../components/Header', () => {
  const MockHeader = () => <div>Header Component</div>;
  MockHeader.displayName = 'Header';
  return MockHeader;
});

describe('App Component', () => {
  it('should render the App component', () => {
    render(
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    );

    const headerElement = screen.getByText('Header Component');
    expect(headerElement).toBeInTheDocument();
  });
});
