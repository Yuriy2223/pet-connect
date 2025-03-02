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
  RaitingIcon,
  ViewedBtnWrapper,
  ViewedCardContainer,
  ViewedCardList,
  ViewedDetails,
  ViewedDetailsHeader,
  ViewedImg,
  ViewedRaiting,
} from './MyViewedCard.styled';

export const MyViewedCard: React.FC<{
  notice: Notice;
  favorites: Notice[];
}> = ({ notice, favorites }) => {
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
    <ViewedCardContainer>
      <ViewedImg
        src={imgSrc}
        alt={notice.title}
        onError={() => setImgSrc(defaultImage)}
      />
      <ViewedDetails>
        <ViewedDetailsHeader>
          <h2>{notice.title}</h2>
          <ViewedRaiting>
            <RaitingIcon width={18} height={18} iconName="star" />
            <span>{notice.popularity}</span>
          </ViewedRaiting>
        </ViewedDetailsHeader>
        <ViewedCardList>
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
        </ViewedCardList>
        <p>{notice.comment}</p>
      </ViewedDetails>

      <ViewedBtnWrapper>
        <LearnButton onClick={handleLearnMoreClick}>Learn more</LearnButton>

        <HeartButton
          $isActive={isFavorite}
          onClick={() => handleHeartClick(notice._id)}
        >
          <HeartIcon width={18} height={18} iconName="heart" />
        </HeartButton>
      </ViewedBtnWrapper>
    </ViewedCardContainer>
  );
};
