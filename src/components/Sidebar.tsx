import React from 'react';
import styled from 'styled-components';
import { StyledProfileDescription, StyledTitle, StyledHeading } from '../themes/commonThemeTypes';
import profilePic from '../assets/images/profile-pic.jpg';
import socialMedia from '../dataList/socialMedia';

const StyledSideBar = styled.div`
  position: fixed;
  top: 97px;
  margin-top: ${(props) => props.theme.spacing.medium};
  height: calc(100vh - 125px);
  max-height: 700px;
  width: 300px;
  box-shadow: ${(props) => props.theme.boxShadow.large};
  background: ${(props) => props.theme.background};
  padding: ${(props) => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProfilePictureWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${(props) => props.theme.borderRadius.round};
  background: ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.boxShadow.medium};
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const StyledProfilePicture = styled.img`
  position: relative;
  left: -30px;
  width: 150%;
  height: auto;
`;

const StyledSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 200px;
`;

const StyledIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.highlight};
  }
`;

const StyledSpacer = styled.div`
  flex: 1;
`;

const StyledCopyright = styled.div`
  margin-top: auto;
  text-align: center;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const Sidebar = () => {
  return (
    <StyledSideBar>
      <StyledTitle data-testid="sidebar-title">Darshan Lakade</StyledTitle>
      <StyledProfilePictureWrapper>
        <StyledProfilePicture src={profilePic} alt="profile" />
      </StyledProfilePictureWrapper>
      <StyledProfileDescription>
        Hi dear friend 👋. Welcome to my personal website! Here you can find all information related me and contact with
        me if you want.
      </StyledProfileDescription>
      <StyledHeading>Find me on social media</StyledHeading>
      <StyledSocialMediaWrapper>
        {socialMedia.map((social) => (
          <StyledIconLink
            data-testid="iconlink-list"
            key={social.name}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon size="1.5em" />
          </StyledIconLink>
        ))}
      </StyledSocialMediaWrapper>
      <StyledSpacer />
      <StyledCopyright>&copy; 2024. All rights reserved</StyledCopyright>
    </StyledSideBar>
  );
};

export default Sidebar;
