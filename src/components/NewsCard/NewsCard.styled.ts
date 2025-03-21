import styled from 'styled-components';

export const NewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    width: 340px;
    padding: 20px;
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
    height: 240px;
    margin-bottom: 28px;
  }
`;
export const NewsTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};

  height: 41px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

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

  height: 72px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;

  margin-bottom: 20px;

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
