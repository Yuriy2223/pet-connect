import React, { useEffect } from 'react';
import { UserBlock } from '../UserBlock/UserBlock';
import { PetsBlock } from '../PetsBlock/PetsBlock';
import { UserCardContainer } from './UserCard.styled';
import { fetchFullUserInfo } from '../../redux/user/operations';
import { useAppDispatch } from '../../redux/store';

export const UserCard: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFullUserInfo());
  }, [dispatch]);

  return (
    <UserCardContainer>
      <UserBlock />
      <PetsBlock />
    </UserCardContainer>
  );
};
