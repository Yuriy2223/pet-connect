import React from 'react';
import { ProfilePageContainer } from './ProfilePage.styled';
import { UserCard } from '../../components/UserCard/UserCard';
import { MyNotices } from '../../components/MyNotices/MyNotices';

export const ProfilePage: React.FC = () => {
  return (
    <ProfilePageContainer>
      <UserCard />
      <MyNotices />
    </ProfilePageContainer>
  );
};
