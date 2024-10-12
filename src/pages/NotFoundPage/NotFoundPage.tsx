import React from 'react';
import {
  Img404,
  NavButton,
  NavButtonWrapper,
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundWrapper,
  Text,
} from './NotFoundPage.styled';

export const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <NotFoundContent>
          <NotFoundTitle>
            <li>4</li>
            <li>
              <Img404></Img404>
            </li>
            <li>4</li>
          </NotFoundTitle>
          <Text>Ooops! This page not found :(</Text>
          <NavButtonWrapper>
            <NavButton to="/">To home page</NavButton>
          </NavButtonWrapper>
        </NotFoundContent>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};
