import styled from 'styled-components';

export const ModalFormLogaut = styled.div`
  padding: 12px 0 32px;
  max-width: 438px;
  margin: 0 auto;
`;
export const ModalImageWrapper = styled.div``;
export const ModalImage = styled.img``;
export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--primary);
  margin-bottom: 20px;
`;
export const ModalText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 40px;
`;
export const ModalButton = styled.button`
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.primaryColorLight};
  border: none;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
