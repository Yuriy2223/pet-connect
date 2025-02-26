import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ModalContainer = styled.div`
  padding: 60px 30px 40px;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.primaryDark};
    text-align: center;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.17;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    /* text-align: center; */
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 60px;
    padding: 60px 40px 40px;
  }
`;
export const ImageWrapper = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 4px solid ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 44px;
    height: 44px;

    @media (min-width: 768px) {
      width: 52px;
      height: 52px;
    }
  }
  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
export const ModalButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  @media (min-width: 768px) {
    gap: 40px;
    margin-top: 30px;
  }
`;
export const ModalButton = styled(NavLink)`
  border-radius: 30px;
  width: 136px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  border: 1px solid ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 768px) {
    width: 142px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
