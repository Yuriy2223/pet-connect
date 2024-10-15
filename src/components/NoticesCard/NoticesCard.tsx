import React from 'react';
import styled from 'styled-components';

export const NoticesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface NoticesCardProps {
  id: string;
  name: string;
  species: string;
  // Add any other fields you want to display
}

export const NoticesCard: React.FC<NoticesCardProps> = ({ name, species }) => {
  return (
    <NoticesCardContainer>
      <h2>{name}</h2>
      <p>Species: {species}</p>
    </NoticesCardContainer>
  );
};
