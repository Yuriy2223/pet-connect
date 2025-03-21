import styled from 'styled-components';
import { Container } from '../../components/Common/Container';

export const NewsPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 50px 26px;
  }

  @media (min-width: 1280px) {
    padding: 62px;
  }
`;
export const NewsSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      font-size: 54px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 34px;
    margin-top: 44px;
  }

  @media (min-width: 1280px) {
    margin-top: 60px;
    gap: 34px;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 50px;
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
