import styled from 'styled-components';
import { Container } from '../../components/Common/Container';

export const FriendsPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (min-width: 320px) and (max-width: 374px) {
    padding: 40px 10px 40px;
  }

  @media (min-width: 768px) {
    padding: 50px 32px;
  }

  @media (min-width: 1280px) {
    padding: 62px 32px;
  }
`;
export const TitleFriends = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};

  @media (min-width: 768px) {
    font-size: 54px;
  }
`;
export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 44px;
  }

  @media (min-width: 1280px) {
    margin-top: 60px;
  }
`;
export const NotFoundMessage = styled.p`
  margin: 0 auto;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primaryDark};

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;
