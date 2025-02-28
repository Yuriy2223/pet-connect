import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const NoticesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border-radius: 16px;
  padding: 24px;
  width: 335px;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 374px) {
    width: 100%;
    padding: 16px;
    gap: 16px;
  }

  @media (min-width: 768px) {
    padding: 32px;
    width: 341px;
  }

  @media (min-width: 1280px) {
    width: 363px;
  }
`;
export const NoticesImg = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;
export const NoticesDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    width: 100%;
    height: 36px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const NoticesDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: ${({ theme }) => theme.black};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;
export const NoticesRaiting = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      line-height: 1.43;
    }
  }
`;
export const RaitingIcon = styled(Iconsvg)`
  fill: ${({ theme }) => theme.star};
  stroke: ${({ theme }) => theme.star};
`;
export const NoticeCardList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 16px;

  li {
    /* width: 35px;
    height: 30px; */
    width: 61px;
    height: 36px;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.opacityTr};
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      width: 100%;
      font-size: 12px;
      line-height: 1.17;
      letter-spacing: -0.02em;
      color: ${({ theme }) => theme.black};
      margin-top: 4px;
      display: block;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export const NoticesBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LearnButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 200px;
  height: 46px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  border: 1px solid ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryLight};

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const HeartButton = styled.button`
  background-color: ${({ theme }) => theme.lightYellow};
  border: 1px solid ${({ theme }) => theme.primaryDark};
  border-radius: 30px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  .isActive {
    background-color: ${({ theme }) => theme.primaryDark};

    svg {
      stroke: ${({ theme }) => theme.red};
      fill: ${({ theme }) => theme.red};
    }
  }
`;
export const HeartIcon = styled(Iconsvg)`
  fill: none;
  stroke: ${({ theme }) => theme.primaryDark};
  transition: all 300ms ease;
`;
