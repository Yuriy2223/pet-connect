import React, { useState } from 'react';
import { Notice } from '../../redux/notices/notices.types';
import defaultImage from '../../assets/imeges/defaultNotice.webp';
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

export interface NoticeCardProps {
  notice: Notice;
}
export const NoticesCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const [imgSrc, setImgSrc] = useState(notice.imgURL || defaultImage);

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
        <LearnButton>Learn more</LearnButton>
        <HeartButton title="Add to favorites">
          <HeartIcon width={18} height={18} iconName="heart" />
        </HeartButton>
      </NoticesBtnWrapper>
    </NoticesCardContainer>
  );
};
