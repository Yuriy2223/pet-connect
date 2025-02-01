import React from 'react';
import { ModalUniversal } from '../UniversalModal';
import alreadyImg from '../../assets/imeges/modal-log-2x.webp';
import {
  ModalButton,
  ModalFormLogaut,
  ModalImage,
  ModalImageWrapper,
  ModalTitle,
} from './ModalApproveAction.styled';

interface ModalLogoutProps {
  closeModal: () => void;
  onLogout: () => void;
}

export const ModalApproveAction: React.FC<ModalLogoutProps> = ({
  closeModal,
  onLogout,
}) => (
  <ModalUniversal closeModal={closeModal}>
    <ModalFormLogaut>
      <ModalImageWrapper>
        <ModalImage src={alreadyImg} alt="Logout icon" />
      </ModalImageWrapper>
      <ModalTitle>Are you sure you want to log out?</ModalTitle>
      <ModalButton onClick={onLogout}>Yes</ModalButton>
      <ModalButton onClick={closeModal}>Cancel</ModalButton>
    </ModalFormLogaut>
  </ModalUniversal>
);
