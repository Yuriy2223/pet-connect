import React from 'react';
// import defaultImage from '../../assets/imeges/defaultNevs.webp';
import defaultImage from '../../assets/imeges/deffImgNews.webp';
import {
  NewsCardContainer,
  NewsDate,
  NewsDescription,
  NewsFooter,
  NewsImage,
  NewsTitle,
  ReadMoreLink,
} from './NewsCard.styled';

export interface NewsCardProps {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  // id: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imgUrl,
  title,
  text,
  date,
  url,
}) => {
  return (
    <NewsCardContainer>
      <NewsImage src={imgUrl || defaultImage} alt={title} />
      <NewsTitle>{title}</NewsTitle>
      <NewsDescription>{text}</NewsDescription>
      <NewsFooter>
        <NewsDate>{date}</NewsDate>
        <ReadMoreLink href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </NewsFooter>
    </NewsCardContainer>
  );
};
