import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { logoutUser } from '../../redux/auth/operations';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import { toast } from 'react-toastify';
import {
  LogautImageWrapper,
  ModalButtonClose,
  ModalButtonWrapper,
  ModalButtonYes,
  ModalLogaut,
} from './ModalApproveAction.styled';

export const ModalApproveAction: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector(selectModalType);

  if (modalType !== 'ModalApproveAction') return null;

  const handleLogout = async () => {
    await dispatch(logoutUser());
    toast.success('Logaut successful!');
    dispatch(closeModal());
  };

  return (
    <ModalLogaut>
      <LogautImageWrapper>
        <div></div>
      </LogautImageWrapper>
      <h2>Already leaving?</h2>
      <ModalButtonWrapper>
        <ModalButtonYes onClick={handleLogout}>Yes</ModalButtonYes>
        <ModalButtonClose onClick={() => dispatch(closeModal())}>
          Cancel
        </ModalButtonClose>
      </ModalButtonWrapper>
    </ModalLogaut>
  );
};
