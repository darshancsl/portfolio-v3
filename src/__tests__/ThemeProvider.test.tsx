// ThemeProvider.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../themes/ThemeProvider';
import ThemeSwitch from '../components/ThemeSwitch';

describe('useTheme', () => {
  it('should provide the correct initial theme', () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );

    const innerCircle = screen.getByRole('button');
    expect(innerCircle).toHaveStyle('left: 2px');
  });

  it('should toggle the theme when the button is clicked', () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );

    const innerCircle = screen.getByRole('button');
    const toggleButton = screen.getByTestId('toggle-button');

    expect(innerCircle).toHaveStyle('left: 2px');
    fireEvent.click(toggleButton);
    expect(innerCircle).toHaveStyle('left: calc(100% - 32px)');
    fireEvent.click(toggleButton);
    expect(innerCircle).toHaveStyle('left: 2px');
  });
});
