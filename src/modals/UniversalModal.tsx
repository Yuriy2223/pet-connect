import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsModalOpen, selectModalProps, selectModalType } from '../redux/modal/selectors';
import { closeModal } from '../redux/modal/slice';
import { ModalApproveAction } from './ModalApproveAction/ModalApproveAction';
// import {
//   selectIsModalOpen,
//   selectModalType,
//   selectModalProps,
// } from '../../redux/modal/selectors';
// import { closeModal } from '../../redux/modal/slice';
// import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
import styled from 'styled-components';

export const ModalUniversal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const modalType = useSelector(selectModalType);
  const modalProps = useSelector(selectModalProps);

  if (!isOpen) return null;

  const closeHandler = () => dispatch(closeModal());

  const renderModalContent = () => {
    switch (modalType) {
      case 'ModalApproveAction':
        return <ModalApproveAction {...modalProps} />;
      default:
        return null;
    }
  };

  return (
    <Overlay onClick={closeHandler}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {renderModalContent()}
      </ModalContent>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 320px;
  max-width: 500px;
  z-index: 1001;
`;

/////////////////////////************************************** */
// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { Iconsvg } from '../components/Common/Icons';

// const ModalBackdrop = styled.div`
//   /* position: fixed;
//   top: 0;
//   left: 0; */
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.6);
//   display: flex;
//   align-items: center;
//   z-index: 20;
//   /* justify-content: center;
//   animation: fadeIn 0.3s ease;
//   z-index: 5;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   } */
// `;
// const ModalContainer = styled.div`
//   position: relative;
//   overflow-y: auto;
//   border-radius: 30px;
//   background-color: ${({ theme }) => theme.white};
//   /* background-color: #fff; */

//   /* border-radius: 15px;
//   width: 90%;
//   max-width: 566px;
//   max-height: 95vh;
//   background: var(--white-color);
//   padding: 32px;
//   overflow-y: auto;

//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   animation: slideIn 0.3s ease;

//   @keyframes slideIn {
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
// `;
// export const CloseIcon = styled(Iconsvg)`
//   width: 32px;
//   height: 32px;
//   stroke: ${({ theme }) => theme.black};
// `;
// interface ModalProps {
//   closeModal: () => void;
//   children: React.ReactNode;
// }

// export const ModalUniversal: React.FC<ModalProps> = ({
//   closeModal,
//   children,
// }) => {
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') closeModal();
//     };
//     document.addEventListener('keydown', handleEsc);
//     return () => document.removeEventListener('keydown', handleEsc);
//   }, [closeModal]);

//   return (
//     <ModalBackdrop onClick={closeModal}>
//       <ModalContainer onClick={e => e.stopPropagation()}>
//         <CloseButton onClick={closeModal}>
//           <CloseIcon width={32} height={32} iconName="close" />
//         </CloseButton>
//         {children}
//       </ModalContainer>
//     </ModalBackdrop>
//   );
// };
