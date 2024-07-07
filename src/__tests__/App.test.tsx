// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { ThemeProvider } from '../themes/ThemeProvider';
import GlobalStyles from '../themes/GlobalStyles';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../components/Header', () => {
  const MockHeader = () => <div>Header Component</div>;
  MockHeader.displayName = 'Header';
  return MockHeader;
});
jest.mock('../components/Sidebar', () => {
  const MockHeader = () => <div>Sidebar Component</div>;
  MockHeader.displayName = 'Sidebar';
  return MockHeader;
});

jest.mock('../components/SidebarOverlay', () => {
  const MockHeader = () => <div>SidebarOverlay Component</div>;
  MockHeader.displayName = 'SidebarOverlay';
  return MockHeader;
});

describe('App Component', () => {
  it('should render the App component', () => {
    render(
      <ThemeProvider>
        <GlobalStyles />
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    const headerElement = screen.getByText('Header Component');
    expect(headerElement).toBeInTheDocument();
  });
});
