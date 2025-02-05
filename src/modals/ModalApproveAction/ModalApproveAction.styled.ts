import styled from 'styled-components';
import logautImg from '../../assets/imeges/mobail/logaut-mob.webp';
import logautImg2x from '../../assets/imeges/desktop/logaut-desktop.webp';

export const ModalLogaut = styled.div`
  padding: 40px 0;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;

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
      line-height: 1.17;
    }
  }

  @media (min-width: 768px) {
    padding: 80px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-image: url(${logautImg});
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
      background-image: url(${logautImg2x});
    }
  }
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const ModalButton = styled.button`
  border-radius: 30px;
  width: 136px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 142px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const ModalButtonYes = styled(ModalButton)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryLight};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;
export const ModalButtonClose = styled(ModalButton)`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.opacity};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
  }
`;
