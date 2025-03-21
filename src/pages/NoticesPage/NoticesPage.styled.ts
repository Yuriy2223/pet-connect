import styled from 'styled-components';
import { Container } from '../../components/Common/Container';

export const NoticesPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 50px 32px;
  }

  @media (min-width: 1280px) {
    padding: 62px 32px;
  }
`;
export const NoticesTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};

  @media (min-width: 768px) {
    font-size: 54px;
    margin-left: 32px;
  }
`;
export const NoticesSearchWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;
export const NoticesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (min-width: 1280px) {
    gap: 32px;
    width: 1156px;
    margin: 0 auto;
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
