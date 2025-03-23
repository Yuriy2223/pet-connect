import React from 'react';
import cat from '../../assets/imeges/mobail/registration.webp';
import catRetina from '../../assets/imeges/mobail/registration-2x.webp';
import cat768 from '../../assets/imeges/tablet/cat768.webp';
import catRetina768 from '../../assets/imeges/tablet/cat768-2x.webp';
import cat1280 from '../../assets/imeges/desktop/cat1280.webp';
import catRetina1280 from '../../assets/imeges/desktop/cat1280-2x.webp';
import petMessage from '../../assets/imeges/modal-log-2x.webp';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  AnimalDescription,
  AnimalNameBirthday,
  CatContainer,
  CatImage,
  FormContainer,
  IconLarge,
  IconMedium,
  IconSmall,
  IconWrapper,
  MessageWrapper,
  RegistrationPageContainer,
  WrapperAnimal,
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
        <MessageWrapper>
          <WrapperAnimal>
            <img src={petMessage} alt="Cat" />
          </WrapperAnimal>
          <div>
            <AnimalNameBirthday>
              <p>Jack</p>
              <div>
                Birthday:
                <span>30.03.2025</span>
              </div>
            </AnimalNameBirthday>
            <AnimalDescription>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys.
            </AnimalDescription>
          </div>
        </MessageWrapper>
      </CatContainer>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </RegistrationPageContainer>
  );
};
