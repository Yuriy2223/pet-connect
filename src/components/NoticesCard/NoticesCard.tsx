import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Notice } from '../../redux/notices/notices.types';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { selectFavorites } from '../../redux/notices/selectors';
import { useAppDispatch } from '../../redux/store';
import {
  addNoticesFavorite,
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
  RaitingIcon,
} from './NoticesCard.styled';
import { Notice } from '../../App.types';
// import { NoticeCardProps } from '../../App.types';

// export interface NoticeCardProps {
//   notice: Notice;
// }

export const NoticesCard: React.FC<{ notice: Notice }> = ({ notice }) => {
  const dispatch = useAppDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(
    favoriteNotice => favoriteNotice._id === notice._id
  );

  const handleLearnMoreClick = () => {
    if (isSignedIn) {
      dispatch(openModal({ type: 'ModalNotice', props: { notice } }));
    } else {
      dispatch(openModal({ type: 'ModalAttention' }));
    }
  };

  const handleHeartClick = () => {
    if (!isSignedIn) {
      dispatch(openModal({ type: 'ModalAttention' }));
      return;
    }

    // if (isFavorite) {
    //   dispatch(removeNoticesFavorite(notice));
    // } else {
    //   dispatch(addNoticesFavorite(notice));
    // }
    if (isFavorite) {
      dispatch(removeNoticesFavorite(notice._id));
    } else {
      dispatch(addNoticesFavorite(notice._id));
    }
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
      </NoticesDetails>

      <NoticesBtnWrapper>
        <LearnButton onClick={handleLearnMoreClick}>Learn more</LearnButton>
        <HeartButton
          title="Add to favorites"
          onClick={handleHeartClick}
          className={isFavorite ? 'isActive' : ''}
        >
          <HeartIcon width={18} height={18} iconName="heart" />
        </HeartButton>
      </NoticesBtnWrapper>
    </NoticesCardContainer>
  );
};
