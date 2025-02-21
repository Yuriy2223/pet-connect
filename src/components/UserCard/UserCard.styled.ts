import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 30px;
  }
`;
