import React from 'react';
import cat from '../../assets/imeges/mobail/registration.webp';
import catRetina from '../../assets/imeges/mobail/registration-2x.webp';
import cat768 from '../../assets/imeges/tablet/cat768.webp';
import catRetina768 from '../../assets/imeges/tablet/cat768-2x.webp';
import cat1280 from '../../assets/imeges/desktop/cat1280.webp';
import catRetina1280 from '../../assets/imeges/desktop/cat1280-2x.webp';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  CatContainer,
  CatImage,
  FormContainer,
  IconLarge,
  IconMedium,
  IconSmall,
  IconWrapper,
  RegistrationPageContainer,
} from './RegistrationPage.styled';

export const RegistrationPage: React.FC = () => {
  return (
    <RegistrationPageContainer>
      <CatContainer>
        <picture>
          <source
            srcSet={`${catRetina1280} 2x, ${cat1280} 1x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${catRetina768} 2x, ${cat768} 1x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${catRetina} 2x, ${cat} 1x`} />
          <CatImage src={cat} alt="Cat" />
        </picture>
        <IconWrapper>
          <IconSmall iconName="background" />
          <IconMedium iconName="background768" />
          <IconLarge iconName="background1280" />
        </IconWrapper>
      </CatContainer>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </RegistrationPageContainer>
  );
};
