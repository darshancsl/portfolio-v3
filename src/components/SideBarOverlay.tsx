import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  margin-top: ${(props) => props.theme.spacing.medium};
  height: calc(100vh - 125px);
  flex: 0 0 300px;
  visibility: hidden;
  box-shadow: ${(props) => props.theme.boxShadow.large};
  background: ${(props) => props.theme.background};
`;
const SidebarOverlay = () => {
  return <StyledSideBar data-testid="sidebar-overlay"></StyledSideBar>;
};

export default SidebarOverlay;
