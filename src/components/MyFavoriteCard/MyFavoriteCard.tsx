import React, { useState } from 'react';
import { Notice } from '../../App.types';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import { useAppDispatch } from '../../redux/store';
import { openModal } from '../../redux/modal/slice';
import {
  LearnButton,
  NoticeCardList,
  NoticesBtnWrapper,
  NoticesCardContainer,
  NoticesDetails,
  NoticesDetailsHeader,
  NoticesImg,
  NoticesRaiting,
  RaitingIcon,
  RemoveFavoriteBtn,
  RemoveIcon,
} from './MyFavoriteCard.styled';

export interface NoticeCardProps {
  notice: Notice;
  favorites: Notice[];
  onRemove: (id: string) => void;
}
export const MyFavoriteCard: React.FC<NoticeCardProps> = ({
  notice,
  favorites,
  onRemove,
}) => {
  const dispatch = useAppDispatch();
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);

  const handleLearnMoreClick = () => {
    dispatch(openModal({ type: 'ModalNotice', props: { notice, favorites } }));
  };

  return (
    <NoticesCardContainer>
      <NoticesImg
        src={imgSrc}
        alt={notice.title}
        onError={() => setImgSrc(defaultImage)}
      />
      <NoticesDetails>
        <NoticesDetailsHeader>
          <h2>{notice.title}</h2>
          <NoticesRaiting>
            <RaitingIcon width={18} height={18} iconName="star" />
            <span>{notice.popularity}</span>
          </NoticesRaiting>
        </NoticesDetailsHeader>
        <NoticeCardList>
          <li>
            Name<span>{notice.name}</span>
          </li>
          <li>
            Birthday
            <span>
              {notice.birthday
                ? notice.birthday.split('-').reverse().join('.')
                : ''}
            </span>
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
      </NoticesDetails>

      <NoticesBtnWrapper>
        <LearnButton onClick={handleLearnMoreClick}>Learn more</LearnButton>
        <RemoveFavoriteBtn
          title="Remove favorites"
          onClick={() => onRemove(notice._id)}
        >
          <RemoveIcon width={18} height={18} iconName="trash" />
        </RemoveFavoriteBtn>
      </NoticesBtnWrapper>
    </NoticesCardContainer>
  );
};
