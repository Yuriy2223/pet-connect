import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
import { ModalEditUser } from '../ModalEditUser/ModalEditUser';
import { ModalDeleteMyPets } from '../ModalDeleteMyPets/ModalDeleteMyPets';
import { ModalAttention } from '../ModalAttention/ModalAttention';
import { ModalNotice } from '../ModalNotice/ModalNotice';
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
      case 'ModalEditUser':
        return <ModalEditUser {...modalProps} />;
      case 'ModalDeleteMyPets':
        return <ModalDeleteMyPets {...modalProps} />;
      case 'ModalNotice':
        return <ModalNotice {...modalProps} />;
      case 'ModalAttention':
        return <ModalAttention {...modalProps} />;
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
