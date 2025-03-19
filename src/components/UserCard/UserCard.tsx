import React from 'react';
import { UserBlock } from '../UserBlock/UserBlock';
import { PetsBlock } from '../PetsBlock/PetsBlock';
import { UserCardContainer } from './UserCard.styled';

export const UserCard: React.FC = () => {
  return (
    <UserCardContainer>
      <UserBlock />
      <PetsBlock />
    </UserCardContainer>
  );
};
