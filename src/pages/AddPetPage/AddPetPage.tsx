import React from 'react';
import add375 from '../../assets/imeges/mobail/add375.webp';
import addRetina375 from '../../assets/imeges/mobail/add375-2x.webp';
import add768 from '../../assets/imeges/tablet/add768.webp';
import addRetina768 from '../../assets/imeges/tablet/add768-2x.webp';
import add1280 from '../../assets/imeges/desktop/add1280.webp';
import addRetina1280 from '../../assets/imeges/desktop/add1280-2x.webp';
import { AddPetForm } from '../../components/AddPetForm/AddPetForm';
import {
  AddFormWrapper,
  AddPetImage,
  AddPetImgContainer,
  AddPetPageContainer,
  IconLarge,
  IconMedium,
  IconSmall,
  IconWrapper,
} from './AddPetPage.styled';

export const AddPetPage: React.FC = () => {
  return (
    <AddPetPageContainer>
      <AddPetImgContainer>
        <picture>
          <source
            srcSet={`${addRetina1280} 2x, ${add1280} 1x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${addRetina768} 2x, ${add768} 1x`}
            media="(min-width: 768px)"
          />
          <source srcSet={`${addRetina375} 2x, ${add375} 1x`} />
          <AddPetImage src={add375} alt="Dog" />
        </picture>
        <IconWrapper>
          <IconSmall iconName="background" />
          <IconMedium iconName="background768" />
          <IconLarge iconName="background1280" />
        </IconWrapper>
      </AddPetImgContainer>
      <AddFormWrapper>
        <AddPetForm />
      </AddFormWrapper>
    </AddPetPageContainer>
  );
};
