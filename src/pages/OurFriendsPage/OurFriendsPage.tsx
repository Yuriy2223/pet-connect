import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { fetchFriends } from '../../redux/friends/operations';
import { FriendsCard } from '../../components/FriendsCard/FriendsCard';
import { Loader } from '../../components/loader/Loader';
import {
  selectFriends,
  selectFriendsLoading,
} from '../../redux/friends/selectors';
import {
  FriendsList,
  FriendsPageContainer,
  NotFoundMessage,
  TitleFriends,
} from './OurFriendsPage.styled';

export const OurFriendsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const friendsData = useSelector(selectFriends);
  const isLoading = useSelector(selectFriendsLoading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FriendsPageContainer>
      <TitleFriends>Our Friends</TitleFriends>

      <FriendsList>
        {friendsData.length ? (
          friendsData.map(friend => (
            <li key={friend._id}>
              <FriendsCard friend={friend} />
            </li>
          ))
        ) : (
          <NotFoundMessage>Nothing was found for your search.</NotFoundMessage>
        )}
      </FriendsList>
    </FriendsPageContainer>
  );
};
