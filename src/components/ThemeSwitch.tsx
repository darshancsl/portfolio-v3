import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../themes/ThemeProvider'; // Adjust the import path as necessary

const StyledSwitchOuter = styled.div`
  position: relative;
  width: 80px;
  height: 42px;
  border: 4px solid ${(props) => props.theme.background};
  border-radius: ${(props) => props.theme.borderRadius.xLarge};
  box-shadow: ${(props) => props.theme.boxShadow.medium};
  background: ${(props) => props.theme.highlight};
`;

const StyledSwitch = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.xLarge};
  box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const StyledInnerCircle = styled.button<{ active: string }>`
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.active === 'dark' &&
    css`
      left: calc(100% - 32px);
    `}
  width: 30px;
  height: 30px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.round};
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxShadow.medium};
  cursor: pointer;
`;

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleItemClick = () => {
    toggleTheme();
  };

  return (
    <StyledSwitchOuter>
      <StyledSwitch>
        <StyledInnerCircle
          data-testid="toggle-button"
          onClick={handleItemClick}
          active={theme === 'light' ? 'light' : 'dark'}
        />
      </StyledSwitch>
    </StyledSwitchOuter>
  );
};

export default ThemeSwitch;
