import React from 'react';
import { ProfilePageContainer } from './ProfilePage.styled';
import { UserCard } from '../../components/UserCard/UserCard';
import { MyNotices } from '../../components/MyNotices/MyNotices';
import { Loader } from '../../components/loader/Loader';
import { useSelector } from 'react-redux';
import { selectUserLoading } from '../../redux/user/selectors';

export const ProfilePage: React.FC = () => {
  const isLoading = useSelector(selectUserLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProfilePageContainer>
      <UserCard />
      <MyNotices />
    </ProfilePageContainer>
  );
};
