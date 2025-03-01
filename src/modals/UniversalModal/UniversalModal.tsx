import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { ModalApproveAction } from '../ModalApproveAction/ModalApproveAction';
import { ModalEditUser } from '../ModalEditUser/ModalEditUser';
import { ModalDeleteMyPets } from '../ModalDeleteMyPets/ModalDeleteMyPets';
import { ModalAttention } from '../ModalAttention/ModalAttention';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { ModalCongrats } from '../ModalCongrats/ModalCongrats';
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
import { Notice } from '../../App.types';

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
      case 'ModalCongrats':
        return <ModalCongrats {...modalProps} />;
      case 'ModalAttention':
        return <ModalAttention {...modalProps} />;
      case 'ModalNotice': {
        const { notice, favorites } = modalProps as {
          notice: Notice;
          favorites: Notice[];
        };
        return <ModalNotice notice={notice} favorites={favorites} />;
      }
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
