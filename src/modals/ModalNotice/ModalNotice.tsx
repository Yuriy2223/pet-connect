import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import { selectModalType } from '../../redux/modal/selectors';
import { AppDispatch } from '../../redux/store';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import {
  Notice,
  // NoticeCardProps
} from '../../App.types';
import {
  ImageWrapper,
  ModalButton,
  ModalButtonWrapper,
  ModalContainer,
} from './ModalNotice.styled';
import {
  HeartIcon,
  NoticeCardList,
  NoticesRaiting,
  RaitingIcon,
} from '../../components/NoticesCard/NoticesCard.styled';

export const ModalNotice: React.FC<{ notice: Notice }> = ({ notice }) => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector(selectModalType);
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);
  if (modalType !== 'ModalNotice') return null;

  return (
    <ModalContainer>
      <ImageWrapper>
        <img
          src={imgSrc}
          alt={notice.title}
          onError={() => setImgSrc(defaultImage)}
        />
      </ImageWrapper>
      <h2>{notice.title}</h2>
      <NoticesRaiting>
        <RaitingIcon width={18} height={18} iconName="star" />
        <span>{notice.popularity}</span>
      </NoticesRaiting>
      <NoticeCardList>
        <li>
          Name<span>{notice.name}</span>
        </li>
        <li>
          Birthday
          <span>{notice.birthday.split('-').reverse().join('.')}</span>
        </li>
        <li>
          Sex<span>{notice.sex}</span>
        </li>
        <li>
          Species<span>{notice.species}</span>
        </li>
        <li>
          Category<span>{notice.category}</span>
        </li>
      </NoticeCardList>
      <p>{notice.comment}</p>
      <ModalButtonWrapper>
        <ModalButton onClick={() => dispatch(closeModal())}>
          Add to <HeartIcon width={18} height={18} iconName="heart" />
        </ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>
          Contact
        </ModalButton>
      </ModalButtonWrapper>
    </ModalContainer>
  );
};
