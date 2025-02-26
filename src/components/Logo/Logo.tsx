import React from 'react';
import { LogoContainer, LogoIcon, LogoText } from './Logo.styled';

export const Logo: React.FC = () => {
  return (
    <LogoContainer to="/home">
      <LogoText>
        Petl
        <LogoIcon width={20} height={20} iconName="heart" />
        ve
      </LogoText>
    </LogoContainer>
  );
};
