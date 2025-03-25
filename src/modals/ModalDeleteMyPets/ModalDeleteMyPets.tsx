import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { closeModal } from '../../redux/modal/slice';
import { selectModalProps, selectModalType } from '../../redux/modal/selectors';
import { removeUserPet } from '../../redux/user/operations';
import { toast } from 'react-toastify';
import {
  LogautImageWrapper,
  ModalButtonClose,
  ModalButtonWrapper,
  ModalButtonYes,
  ModalLogaut,
} from '../ModalApproveAction/ModalApproveAction.styled';

export const ModalDeleteMyPets: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalType = useSelector(selectModalType);
  const modalProps = useSelector(selectModalProps);

  if (modalType !== 'ModalDeleteMyPets') return null;

  const petId = modalProps.petId as string | undefined;

  const handleDeletePets = async () => {
    if (!petId) return;

    try {
      await dispatch(removeUserPet(petId)).unwrap();
      toast.success('Pet successfully deleted!');
      dispatch(closeModal());
    } catch {
      toast.error('Failed to delete pet. Please try again.');
    }
  };

  return (
    <ModalLogaut>
      <LogautImageWrapper>
        <div></div>
      </LogautImageWrapper>
      <h2>Really delete?</h2>
      <ModalButtonWrapper>
        <ModalButtonYes onClick={handleDeletePets}>Yes</ModalButtonYes>
        <ModalButtonClose onClick={() => dispatch(closeModal())}>
          Cancel
        </ModalButtonClose>
      </ModalButtonWrapper>
    </ModalLogaut>
  );
};
