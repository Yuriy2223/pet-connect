import React from 'react';
import {
  HomePageContainer,
  HomePet,
  HomePetImg,
  HomeTitle,
  HomeWrapperText,
} from './HomePage.styled';

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <HomePet>
        <HomeTitle>
          Take good <span>care</span> of your small pets
        </HomeTitle>
        <HomeWrapperText>
          <p>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </HomeWrapperText>
      </HomePet>
      <HomePetImg />
    </HomePageContainer>
  );
};
