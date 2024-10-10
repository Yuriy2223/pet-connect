import React from 'react';
import dog from '../../assets/imeges/mobail/login.webp';
import dogRetina from '../../assets/imeges/mobail/login-2x.webp';
import dog768 from '../../assets/imeges/tablet/dog768.webp';
import dogRetina768 from '../../assets/imeges/tablet/dog768-2x.webp';
import dog1280 from '../../assets/imeges/desktop/dog1280.webp';
import dogRetina1280 from '../../assets/imeges/desktop/dog1280-2x.webp';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import {
  CatImage,
  DogContainer,
  FormLoginContainer,
  IconLarge,
  IconMedium,
  IconSmall,
  IconWrapper,
  LoginPageContainer,
} from './LoginPage.styled';

export const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <DogContainer>
        <picture>
          <source
            srcSet={`${dogRetina1280} 2x, ${dog1280} 1x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${dogRetina768} 2x, ${dog768} 1x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${dogRetina} 2x, ${dog} 1x`} />
          <CatImage src={dog} alt="Dog" />
        </picture>
        <IconWrapper>
          <IconSmall iconName="background" />
          <IconMedium iconName="background768" />
          <IconLarge iconName="background1280" />
        </IconWrapper>
      </DogContainer>
      <FormLoginContainer>
        <LoginForm />
      </FormLoginContainer>
    </LoginPageContainer>
  );
};
