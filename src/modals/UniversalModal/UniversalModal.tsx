import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
