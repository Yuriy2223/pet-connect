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
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: relative;
  /* overflow-y: auto; */
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.primaryDark};
  border-radius: 30px;
  max-width: 334px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 466px;
  }
`;
export const CloseButton = styled.button`
  padding: 6px;
  position: absolute;
  top: 28px;
  right: 20px;
  border: none;
  background: transparent;

  &:hover,
  &:active {
    transform: scale(1.2);
  }

  &:hover svg,
  &:active svg {
    stroke: ${({ theme }) => theme.primaryDark};
  }
`;
export const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.black};
`;

// import styled from 'styled-components';
// import { Iconsvg } from '../../components/Common/Icons';

// export const OverlayModal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
//   background-color: rgba(0, 0, 0, 0.6);

//   /* animation: fadeIn 0.3s ease;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   } */
// `;

// export const ModalContent = styled.div`
//   position: relative;
//   overflow-y: auto;
//   background-color: ${({ theme }) => theme.white};
//   border: 2px solid ${({ theme }) => theme.primaryDark};
//   border-radius: 30px;
//   max-width: 334px;
//   width: 100%;
//   background-color: black;

//   @media (min-width: 768px) {
//     max-width: 466px;
//   }

//   /* animation: slideIn 0.3s ease; */

//   /* @keyframes slideIn {
//     from {
//       transform: translateY(-20px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   } */
// `;
// export const CloseButton = styled.button`
//   padding: 6px;
//   position: absolute;
//   top: 28px;
//   right: 20px;
//   border: none;
//   background: transparent;

//   &:hover,
//   &:active {
//     transform: scale(1.2);
//   }

//   &:hover svg,
//   &:active svg {
//     stroke: ${({ theme }) => theme.primaryDark};
//   }
// `;
// export const CloseIcon = styled(Iconsvg)`
//   width: 32px;
//   height: 32px;
//   stroke: ${({ theme }) => theme.black};
// `;
