import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px 25px;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryLight};
  margin-bottom: 20px;

  img {
    width: 44px;
    height: 44px;

    @media (min-width: 768px) {
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    padding: 80px;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.primaryDark};
    text-align: center;
    margin-bottom: 28px;

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
    text-align: center;
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1.17;
    }
  }
`;
export const ModalBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 8px; */

  /* @media (min-width: 768px) {
    gap: 20px;
  } */
`;
export const ModalButton = styled(NavLink)`
  border-radius: 30px;
  width: 285px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  border: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.lightYellow};
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
