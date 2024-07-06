import React from 'react';
import styled, { useTheme, DefaultTheme } from 'styled-components';
import logoLight from '../assets/images/logo-light.png';
import logoDark from '../assets/images/logo-dark.png';

const StyledLogo = styled.img`
  padding: 0 15px;
`;

const Logo: React.FC = () => {
  const theme = useTheme() as DefaultTheme;
  const logo = theme.mode === 'light' ? logoLight : logoDark;
  return <StyledLogo src={logo} alt="Logo" />;
};

export default Logo;
