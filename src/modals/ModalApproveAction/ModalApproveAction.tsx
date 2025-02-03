import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { logoutUser } from '../../redux/auth/operations';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
import {
  ModalButton,
  ModalFormLogaut,
  ModalImage,
  ModalImageWrapper,
  ModalTitle,
} from './ModalApproveAction.styled';

export const ModalApproveAction: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector(selectModalType);

  if (modalType !== 'ModalApproveAction') return null;

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(closeModal());
  };

  return (
    <ModalFormLogaut>
      <ModalImageWrapper>
        <ModalImage src={alreadyImg} alt="Logout icon" />
      </ModalImageWrapper>
      <ModalTitle>Are you sure you want to log out?</ModalTitle>
      <ModalButton onClick={handleLogout}>Yes</ModalButton>
      <ModalButton onClick={() => dispatch(closeModal())}>Cancel</ModalButton>
    </ModalFormLogaut>
  );
};

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeModal } from '../../redux/modal/slice';
// import { logoutUser } from '../../redux/auth/operations';
// import { selectModalType } from '../../redux/modal/selectors';
// import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
// import {
//   ModalButton,
//   ModalFormLogaut,
//   ModalImage,
//   ModalImageWrapper,
//   ModalTitle,
// } from './ModalApproveAction.styled';

// export const ModalApproveAction: React.FC = () => {
//   const dispatch = useDispatch();
//   const modalType = useSelector(selectModalType);

//   if (modalType !== 'ModalApproveAction') return null;

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     dispatch(closeModal());
//   };

//   return (
//     <ModalFormLogaut>
//       <ModalImageWrapper>
//         <ModalImage src={alreadyImg} alt="Logout icon" />
//       </ModalImageWrapper>
//       <ModalTitle>Are you sure you want to log out?</ModalTitle>
//       <ModalButton onClick={handleLogout}>Yes</ModalButton>
//       <ModalButton onClick={() => dispatch(closeModal())}>Cancel</ModalButton>
//     </ModalFormLogaut>
//   );
// };

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import type { AppDispatch } from '../../redux/store';
// import { closeModal } from '../../redux/modal/slice';
// import { logoutUser } from '../../redux/auth/operations';
// import { selectModalType } from '../../redux/modal/selectors';
// import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
// import {
//   ModalButton,
//   ModalFormLogaut,
//   ModalImage,
//   ModalImageWrapper,
//   ModalTitle,
// } from './ModalApproveAction.styled';

// export const ModalApproveAction: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const modalType = useSelector(selectModalType);

//   if (modalType !== 'ModalApproveAction') return null;

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     dispatch(closeModal());
//   };

//   return (
//     <ModalFormLogaut>
//       <ModalImageWrapper>
//         <ModalImage src={alreadyImg} alt="Logout icon" />
//       </ModalImageWrapper>
//       <ModalTitle>Are you sure you want to log out?</ModalTitle>
//       <ModalButton onClick={handleLogout}>Yes</ModalButton>
//       <ModalButton onClick={() => dispatch(closeModal())}>Cancel</ModalButton>
//     </ModalFormLogaut>
//   );
// };

// import React from 'react';
// import { ModalUniversal } from '../UniversalModal';
// import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
// import {
//   ModalButton,
//   ModalFormLogaut,
//   ModalImage,
//   ModalImageWrapper,
//   ModalTitle,
// } from './ModalApproveAction.styled';

// interface ModalLogoutProps {
//   closeModal: () => void;
//   onLogout: () => void;
// }

// export const ModalApproveAction: React.FC<ModalLogoutProps> = ({
//   closeModal,
//   onLogout,
// }) => (
//   <ModalUniversal closeModal={closeModal}>
//     <ModalFormLogaut>
//       <ModalImageWrapper>
//         <ModalImage src={alreadyImg} alt="Logout icon" />
//       </ModalImageWrapper>
//       <ModalTitle>Are you sure you want to log out?</ModalTitle>
//       <ModalButton onClick={onLogout}>Yes</ModalButton>
//       <ModalButton onClick={closeModal}>Cancel</ModalButton>
//     </ModalFormLogaut>
//   </ModalUniversal>
// );
