import styled from 'styled-components';

export const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const UserName = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.black};
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
