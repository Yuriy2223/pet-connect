import React from 'react';
import { NoticesCard } from '../NoticesCard/NoticesCard';
import styled from 'styled-components';

interface Notice {
  id: string;
  name: string;
  species: string;
  // Add other relevant fields based on your backend response
}

interface NoticesListProps {
  notices: Notice[];
}

export const NoticesListContainer = styled.ul``;

export const NoticesList: React.FC<NoticesListProps> = ({ notices }) => {
  return (
    <NoticesListContainer>
      {notices.map((notice) => (
        <li key={notice.id}>
          <NoticesCard key={notice.id} {...notice} />
        </li>
      ))}
    </NoticesListContainer>
  );
};
