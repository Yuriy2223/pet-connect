import styled from 'styled-components';
import logautImg from '../../assets/imeges/mobail/logaut-mob.webp';
import logautImg2x from '../../assets/imeges/desktop/logaut-desktop.webp';

export const ModalLogaut = styled.div`
  max-width: 276px;
  max-height: 270px;
  width: 100%;
  height: 100%;
  /* padding: 40px 0; */
  z-index: 10;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.black};
    text-align: center;
    margin-bottom: 28px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 117;
    }
  }

  @media (min-width: 768px) {
    max-width: 288px;
    max-height: 364px;
    /* padding: 80px 0; */
  }
`;
export const LogautImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryLight};
  margin-bottom: 20px;

  div {
    width: 44px;
    height: 44px;
    background-image: url(${logautImg});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      background-image: url(${logautImg2x});
    }
  }
`;
export const ModalButtonYes = styled.button`
  border-radius: 30px;
  width: 137px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #fff;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryColorLight};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
  @media (min-width: 768px) {
    width: 140px;
    height: 48px;
  }
`;
export const ModalButtonClose = styled.button`
  border-radius: 30px;
  width: 134px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.opacityTr};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }

  @media (min-width: 768px) {
    width: 140px;
    height: 48px;
  }
`;
