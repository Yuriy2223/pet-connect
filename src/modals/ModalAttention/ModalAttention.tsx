import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import Img from '../../assets/imeges/modal/modal-attention.webp';
import {
  ImageWrapper,
  ModalButton,
  ModalButtonWrapper,
  ModalContainer,
} from './ModalAttention.styled';

export const ModalAttention: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector(selectModalType);

  if (modalType !== 'ModalAttention') return null;

  return (
    <ModalContainer>
      <ImageWrapper>
        <img src={Img} alt="Dog" />
      </ImageWrapper>
      <h2>Attention</h2>
      <p>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <ModalButtonWrapper>
        <ModalButton to="/login" onClick={() => dispatch(closeModal())}>
          Log In
        </ModalButton>
        <ModalButton to="/register" onClick={() => dispatch(closeModal())}>
          Registration
        </ModalButton>
      </ModalButtonWrapper>
    </ModalContainer>
  );
};
