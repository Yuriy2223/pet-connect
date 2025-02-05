// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
// import { closeModal } from '../../redux/modal/slice';
// import {
//   selectIsModalOpen,
//   selectModalProps,
//   selectModalType,
// } from '../../redux/modal/selectors';
// import {
//   CloseButton,
//   CloseIcon,
//   ModalContent,
//   OverlayModal,
// } from './UniversalModal.steled';

// export const ModalUniversal: React.FC = () => {
//   const dispatch = useDispatch();
//   const isOpen = useSelector(selectIsModalOpen);
//   const modalType = useSelector(selectModalType);
//   const modalProps = useSelector(selectModalProps);

//   if (!isOpen) return null;

//   const closeHandler = () => dispatch(closeModal());

//   const renderModalContent = () => {
//     switch (modalType) {
//       case 'ModalApproveAction':
//         return <ModalApproveAction {...modalProps} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <OverlayModal onClick={closeHandler}>
//       <ModalContent onClick={e => e.stopPropagation()}>
//         <CloseButton onClick={closeHandler}>
//           <CloseIcon width={32} height={32} iconName="close" />
//         </CloseButton>
//         {renderModalContent()}
//       </ModalContent>
//     </OverlayModal>
//   );
// };

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
import { closeModal } from '../../redux/modal/slice';
import {
  selectIsModalOpen,
  selectModalProps,
  selectModalType,
} from '../../redux/modal/selectors';
import {
  CloseButton,
  CloseIcon,
  ModalContent,
  OverlayModal,
} from './UniversalModal.steled';

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
    <OverlayModal onClick={closeHandler}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={closeHandler}>
          <CloseIcon width={32} height={32} iconName="close" />
        </CloseButton>
        {renderModalContent()}
      </ModalContent>
    </OverlayModal>
  );
};

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
// import { closeModal } from '../../redux/modal/slice';
// import {
//   selectIsModalOpen,
//   selectModalProps,
//   selectModalType,
// } from '../../redux/modal/selectors';
// import { ModalContent, OverlayModal } from './UniversalModal.steled';

// interface ModalUniversalProps {
//   // children?: React.ReactNode;
//   onLogout: () => void;
// }

// export const ModalUniversal: React.FC = () => {
//   const dispatch = useDispatch();
//   const isOpen = useSelector(selectIsModalOpen);
//   const modalType = useSelector(selectModalType);
//   const modalProps = useSelector(selectModalProps);

//   if (!isOpen) return null;

//   const closeHandler = () => dispatch(closeModal());

//   const renderModalContent = () => {
//     switch (modalType) {
//       case 'ModalApproveAction':
//         return <ModalApproveAction {...modalProps} />;
//       case 'Modal2':
//         return <Modal2 {...modalProps} />;
//       case 'Modal3':
//         return <Modal3 {...modalProps} />;
//       case 'Modal4':
//         return <Modal4 {...modalProps} />;
//       case 'Modal5':
//         return <Modal5 {...modalProps} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <OverlayModal onClick={closeHandler}>
//       <ModalContent onClick={e => e.stopPropagation()}>
//         {renderModalContent()}
//       </ModalContent>
//     </OverlayModal>
//   );
// };

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectIsModalOpen, selectModalType, selectModalProps } from '../../redux/modal/selectors';
// import { closeModal } from '../../redux/modal/slice';
// import { ModalApproveAction } from '../../modals/ModalApproveAction/ModalApproveAction';

// interface ModalUniversalProps {
//   onLogout: () => void;
// }

// export const ModalUniversal: React.FC<ModalUniversalProps> = ({ onLogout }) => {
//   const isOpen = useSelector(selectIsModalOpen);
//   const modalType = useSelector(selectModalType);
//   const modalProps = useSelector(selectModalProps);
//   const dispatch = useDispatch();

//   if (!isOpen) return null;

//   const closeHandler = () => dispatch(closeModal());

//   return (
//     <div className="modal-container">
//       {modalType === 'ModalApproveAction' && (
//         <ModalApproveAction
//           closeModal={closeHandler}
//           onConfirm={modalProps.actionType === 'logout' ? onLogout : undefined}
//         />
//       )}
//     </div>
//   );
// };

// export const ModalUniversal: React.FC<ModalUniversalProps> = ({
//   // children
//   onLogout
//  }) => {
//   const dispatch = useDispatch();
//   const isOpen = useSelector(selectIsModalOpen);
//   const modalType = useSelector(selectModalType);
//   const modalProps = useSelector(selectModalProps);

//   if (!isOpen) return null;

//   const closeHandler = () => dispatch(closeModal());

//   const renderModalContent = () => {
//     switch (modalType) {
//       case 'ModalApproveAction':
//         return <ModalApproveAction {...modalProps} />;
//       default:
//         return children || null;
//     }
//   };

//   return (
//     <OverlayModal onClick={closeHandler}>
//       <ModalContent onClick={e => e.stopPropagation()}>
//         {renderModalContent()}
//       </ModalContent>
//     </OverlayModal>
//   );
// };
