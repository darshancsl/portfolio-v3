import React from 'react';
import styled from 'styled-components';
import routes from '../dataList/routes';
import { Link } from 'react-router-dom';
import Logo from '../themes/Logo';
import ThemeSwitch from './ThemeSwitch';

const StyledHeader = styled.div`
  position: sticky;
  top: 0px;
  min-height: 75px;
  box-shadow: ${(props) => props.theme.boxShadow.large};
  background: ${(props) => props.theme.background};
`;

const StyledWrapper = styled.div`
  background: ${(props) => props.theme.background};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoWrapper = styled.div`
  padding: 15px;
`;

const StyledList = styled.ul`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  margin: 0 ${(props) => props.theme.spacing.medium};
  text-transform: capitalize;
  font-size: ${(props) => props.theme.fontSize.medium};
  cursor: pointer;
  transition: all 0.3s ease-out;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.highlight};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background: ${(props) => props.theme.highlight};
    transition: all 0.3s;
  }

  &::after {
    bottom: 0;
    right: 50%;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.highlightHover};
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledWrapper className="container">
        <StyledNav>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <StyledList>
            {routes.map(({ name, path }, index) => {
              return (
                name !== 'not-found' && (
                  <StyledLink key={name + index} to={path}>
                    {name}
                  </StyledLink>
                )
              );
            })}
          </StyledList>
          <ThemeSwitch />
        </StyledNav>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
