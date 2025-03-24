import styled from 'styled-components';
import { Iconsvg } from '../../components/Common/Icons';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.opacityTr};
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;
  max-width: 336px;
  width: 100%;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-width: 480px;
  }
`;
export const CloseButton = styled.button`
  padding: 6px;
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;

  &:hover,
  &:active {
    transform: rotate(3600deg) scale(1.2);
    opacity: 0.8;
  }

  &:hover svg,
  &:active svg {
    stroke: ${({ theme }) => theme.primaryDark};
    fill: ${({ theme }) => theme.primaryDark};
  }
`;
export const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.black};
`;
