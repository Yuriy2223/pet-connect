import styled from 'styled-components';

export const UserBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--golden-yellow);
`;
export const UserName = styled.span`
  font-weight: 500;
`;
