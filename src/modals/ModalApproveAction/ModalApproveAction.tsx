import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { logoutUser } from '../../redux/auth/operations';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import {
  LogautImageWrapper,
  ModalButtonClose,
  ModalButtonYes,
  ModalLogaut,
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
    <ModalLogaut>
      <LogautImageWrapper>
        <div></div>
      </LogautImageWrapper>
      <h2>Already leaving?</h2>
      <div>
        <ModalButtonYes onClick={handleLogout}>Yes</ModalButtonYes>
        <ModalButtonClose onClick={() => dispatch(closeModal())}>
          Cancel
        </ModalButtonClose>
      </div>
    </ModalLogaut>
  );
};

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { closeModal } from '../../redux/modal/slice';
// import { logoutUser } from '../../redux/auth/operations';
// import { selectModalType } from '../../redux/modal/selectors';
// import { AppDispatch } from '../../redux/store';
// import { ModalUniversal } from '../UniversalModal/UniversalModal';
// import {
//   LogautImageWrapper,
//   ModalButtonClose,
//   ModalButtonYes,
//   ModalLogaut,
// } from './ModalApproveAction.styled';

// export const ModalApproveAction: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const modalType = useSelector(selectModalType);

//   if (modalType !== 'ModalApproveAction') return null;

//   const handleLogout = async () => {
//     await dispatch(logoutUser());
//     dispatch(closeModal());
//   };

//   return (
//     <ModalUniversal>
//       <ModalLogaut>
//         <LogautImageWrapper>
//           <div></div>
//         </LogautImageWrapper>
//         <h2>Already leaving?</h2>
//         <div>
//           <ModalButtonYes onClick={handleLogout}>Yes</ModalButtonYes>
//           <ModalButtonClose onClick={() => dispatch(closeModal())}>
//             Cancel
//           </ModalButtonClose>
//         </div>
//       </ModalLogaut>
//     </ModalUniversal>
//   );
// };
// import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { closeModal } from '../../redux/modal/slice';
// // import { logoutUser } from '../../redux/auth/operations';
// // import { AppDispatch } from '../../redux/store';
// import {
//   LogautImageWrapper,
//   ModalButtonClose,
//   ModalButtonYes,
//   ModalLogaut,
// } from './ModalApproveAction.styled';

// interface ModalApproveActionProps {
//   closeModal: () => void;
//   onConfirm?: () => void;
// }

// export const ModalApproveAction: React.FC<ModalApproveActionProps> = ({
//   closeModal,
//   onConfirm,
// }) => {
//   return (
//     <ModalLogaut>
//       <LogautImageWrapper>
//         <div></div>
//       </LogautImageWrapper>
//       <h2>Already leaving?</h2>
//       <div>
//         <ModalButtonYes onClick={onConfirm}>Yes</ModalButtonYes>
//         <ModalButtonClose onClick={closeModal}>Cancel</ModalButtonClose>
//       </div>
//     </ModalLogaut>
//   );
// };
