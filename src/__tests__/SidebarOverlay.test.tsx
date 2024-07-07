import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../themes/ThemeProvider'; // Adjust the import path as necessary
import SidebarOverlay from '../components/SidebarOverlay'; // Adjust the import path as necessary

describe('SidebarOverlay component', () => {
  it('should render with proper CSS properties', () => {
    render(
      <ThemeProvider>
        <SidebarOverlay />
      </ThemeProvider>
    );

    const sidebarOverlay = screen.getByTestId('sidebar-overlay');
    expect(sidebarOverlay).toHaveStyle('visibility: hidden');
    expect(sidebarOverlay).toHaveStyle('flex: 0 0 300px');
    expect(sidebarOverlay).toHaveStyle('height: calc(100vh - 125px)');
  });
});
