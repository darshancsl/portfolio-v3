import React from 'react';

import styled from 'styled-components';
import { StyledTitle } from '../themes/commonThemeTypes';

const StyledHomePage = styled.div`
  margin: ${(props) => props.theme.spacing.medium};
  box-shadow: ${(props) => props.theme.boxShadow.large};
  background: ${(props) => props.theme.background};
  height: 2000px;
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
`;

function Home() {
  return (
    <>
      <StyledHomePage>
        <StyledTitle>Home</StyledTitle>
      </StyledHomePage>
    </>
  );
}

export default Home;
