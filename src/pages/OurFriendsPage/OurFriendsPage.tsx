import React, { useState, useEffect } from 'react';
import { FriendsCard } from '../../components/FriendsCard/FriendsCard';
import { Pagination } from '../../components/Pagination/Pagination';
import {
  FriendsList,
  FriendsPageContainer,
  PaginationWrapper,
  TitleFriends,
} from './OurFriendsPage.styled';

import friendsDataJson from '../../components/FriendsCard/friendsData.json'; 

export const OurFriendsPage: React.FC = () => {
  const [friendsData, setFriendsData] = useState(friendsDataJson); // Використовуємо дані з JSON
  const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка
  const itemsPerPage = 6; // Кількість карток на сторінці

  // Розраховуємо індекси партнерів для поточної сторінки
  const lastFriendsIndex = currentPage * itemsPerPage;
  const firstFriendsIndex = lastFriendsIndex - itemsPerPage;
  const currentFriends = friendsData.slice(firstFriendsIndex, lastFriendsIndex);

  useEffect(() => {
    setFriendsData(friendsDataJson); // стан даними з JSON
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <FriendsPageContainer>
      <TitleFriends>Our Friends</TitleFriends>

      <FriendsList>
        {currentFriends.map(friend => (
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
      <PaginationWrapper>
        <Pagination
          totalItems={friendsData.length} // Загальна кількість партнерів
          itemsPerPage={itemsPerPage} // Кількість карток на сторінці
          currentPage={currentPage} // Поточна сторінка
          onPageChange={handlePageChange} // Обробник зміни сторінки
        />
      </PaginationWrapper>
    </FriendsPageContainer>
  );
};
