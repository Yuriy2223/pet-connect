import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { closeModal } from '../../redux/modal/slice';
import { selectModalType } from '../../redux/modal/selectors';
import ModalImg from '../../assets/imeges/desktop/logaut-desktop.webp';
import {
  ImageWrapper,
  ModalBtnWrapper,
  ModalButton,
  ModalContainer,
  TextWrapper,
} from './ModalCongrats.styled';

export const ModalCongrats: React.FC = () => {
  const dispatch = useAppDispatch();
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
