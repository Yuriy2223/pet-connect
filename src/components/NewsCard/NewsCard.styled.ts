import styled from 'styled-components';

export const NewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 100%;
  height: 335px;

  @media (min-width: 768px) {
    width: 340px;
    height: 448px;
  }
  @media (min-width: 1280px) {
    width: 362px;
  }
`;
export const NewsImage = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 190px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 226px;
    margin-bottom: 28px;
  }
`;
export const NewsTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};

  overflow: hidden;
  text-overflow: ellipsis;
  height: 52px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 14px;
  }
`;
export const NewsDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.black};

  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px;
  margin-bottom: 19px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;
export const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NewsDate = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  padding: 5px;
  color: ${({ theme }) => theme.opacityTr};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  padding: 5px;
  color: ${({ theme }) => theme.primaryLight};

  &:hover {
    color: ${({ theme }) => theme.primaryDark};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
