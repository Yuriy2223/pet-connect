import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import ModalImg from '../../assets/imeges/desktop/logaut-desktop.webp';
import {
  ImageWrapper,
  ModalBtnWrapper,
  ModalButton,
  ModalContainer,
  TextWrapper,
} from './ModalCongrats.styled';

export const ModalCongrats: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector(selectModalType);

  if (modalType !== 'ModalCongrats') return null;

  const handleModalCongrats = async () => {
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <ImageWrapper>
        <img src={ModalImg} alt="Cat" />
      </ImageWrapper>
      <TextWrapper>
        <h2>Congrats</h2>
        <p>
          The first fluff in the favorites! May your friendship be the happiest
          and filled with fun.
        </p>
      </TextWrapper>

      <ModalBtnWrapper>
        <ModalButton to="/profile" onClick={handleModalCongrats}>
          Go to profile
        </ModalButton>
      </ModalBtnWrapper>
    </ModalContainer>
  );
};
