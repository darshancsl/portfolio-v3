import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.headings.h4};
  color: ${(props) => props.theme.highlight};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  text-align: center;
  text-transform: Capitalize;
`;

export const StyledHeading = styled.h4`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  text-align: center;
  text-transform: Capitalize;
`;

export const StyledProfileDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.text};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  height: auto;
  text-align: center;
`;
