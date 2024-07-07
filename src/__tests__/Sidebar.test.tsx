import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../themes/ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

jest.mock('../dataList/socialMedia', () => [
  {
    name: 'linkedIn',
    path: 'https://www.linkedin.com/in/darshan-lakade/',
    icon: () => <svg data-testid="linkedin-icon" />,
  },
  {
    name: 'github',
    path: 'https://github.com/darshancsl',
    icon: () => <svg data-testid="github-icon" />,
  },
]);

describe('sidebar component', () => {
  it('should render sidebar component properly', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const sidebarTitle = screen.getByTestId('sidebar-title');
    expect(sidebarTitle).toBeInTheDocument();
  });
  it('should render profile pic properly', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const profilePic = screen.getByRole('img');
    expect(profilePic).toBeInTheDocument();
  });
  it('should render the social media icons', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const iconsList = screen.getAllByTestId('iconlink-list');
    expect(iconsList).toHaveLength(2);
  });
  it('should render the copyright text', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const copyrightText = screen.getByText('© 2024. All rights reserved');
    expect(copyrightText).toBeInTheDocument();
  });
});
