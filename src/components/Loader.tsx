import styled from 'styled-components';
import React from 'react';

const StyledLoader = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
  color: #000;
`;

const Loader: React.FC = () => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;
