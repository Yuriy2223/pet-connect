import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchFriends } from '../../redux/friends/operations';
import { FriendsCard } from '../../components/FriendsCard/FriendsCard';
import { useAppDispatch } from '../../redux/store';
import { Loader } from '../../components/loader/Loader';
import {
  selectFriends,
  selectFriendsLoading,
} from '../../redux/friends/selectors';
import {
  FriendsList,
  FriendsPageContainer,
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
        {friendsData.map(friend => (
          <li key={friend._id}>
            <FriendsCard
              title={friend.title}
              imageUrl={friend.imageUrl}
              address={friend.address}
              addressUrl={friend.addressUrl}
              phone={friend.phone}
              email={friend.email}
              workDays={friend.workDays}
            />
          </li>
        ))}
      </FriendsList>
    </FriendsPageContainer>
  );
};
