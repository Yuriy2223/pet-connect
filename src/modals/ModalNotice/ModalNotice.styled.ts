import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 40px 20px;
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
    /* text-align: center; */
    color: ${({ theme }) => theme.black};

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 60px;
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
    }
  }
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;
export const ModalButton = styled.button`
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
