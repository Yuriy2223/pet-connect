import React from 'react';
import styled from 'styled-components';

export const HomePageContainer = styled.h1`
  display: flex;

  h1 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 54px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: #262626;
  }
`;
export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>Home Page</h1>
    </HomePageContainer>
  );
};
