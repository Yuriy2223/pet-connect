import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { useAppDispatch } from '../../redux/store';
import { Notice } from '../../App.types';
import { toast } from 'react-toastify';
import {
  addNoticesFavorite,
  fetchFavorites,
  removeNoticesFavorite,
} from '../../redux/notices/operations';
import {
  HeartButton,
  HeartIcon,
  LearnButton,
  NoticeCardList,
  NoticesBtnWrapper,
  NoticesCardContainer,
  NoticesDetails,
  NoticesDetailsHeader,
  NoticesImg,
  NoticesRaiting,
  PriceTag,
  RaitingIcon,
} from './NoticesCard.styled';

export const NoticesCard: React.FC<{ notice: Notice; favorites: Notice[] }> = ({
  notice,
  favorites,
}) => {
  const dispatch = useAppDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);
  const isFavorite = favorites.some(favorite => favorite._id === notice._id);

  const handleLearnMoreClick = () => {
    if (isSignedIn) {
      dispatch(
        openModal({ type: 'ModalNotice', props: { notice, favorites } })
      );
    } else {
      dispatch(openModal({ type: 'ModalAttention' }));
    }
  };

  const handleHeartClick = async (id: string) => {
    if (!isSignedIn) {
      dispatch(openModal({ type: 'ModalAttention' }));
      return;
    }

    if (isFavorite) {
      await dispatch(removeNoticesFavorite(id));
      toast.success('Removed from favorites');
    } else {
      await dispatch(addNoticesFavorite(id));
      toast.success('Added to favorites');
    }

    dispatch(fetchFavorites());
  };

  return (
    <NoticesCardContainer>
      <PriceTag>
        {notice.price ? `$${notice.price}` : `${notice.category}`}
      </PriceTag>
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
            <span>{notice.birthday?.split('-').reverse().join('.')}</span>
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

        <HeartButton
          $isActive={isFavorite}
          onClick={() => handleHeartClick(notice._id)}
        >
          <HeartIcon width={18} height={18} iconName="heart" />
        </HeartButton>
      </NoticesBtnWrapper>
    </NoticesCardContainer>
  );
};
