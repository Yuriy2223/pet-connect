import React from 'react';
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

interface Notice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt?: string;
}

interface NoticeCardProps {
  notice: Notice;
}

export const NoticesCard: React.FC<NoticeCardProps> = ({ notice }) => {
  return (
    <NoticesCardContainer>
      <NoticesImg src={notice.imgURL} alt="Notice img" />
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
            Birthday<span>{notice.birthday.split('-').reverse().join('.')}</span>
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
