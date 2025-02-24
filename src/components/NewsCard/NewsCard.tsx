import React, { useState } from 'react';
import defaultImage from '../../assets/imeges/defaultNews.webp';
import { News } from '../../redux/news/news.types';
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
  news: News;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const [imgSrc, setImgSrc] = useState(news.imgUrl || defaultImage);

  return (
    <NewsCardContainer>
      <NewsImage
        src={imgSrc}
        alt={news.title}
        onError={() => setImgSrc(defaultImage)}
      />
      <NewsTitle>{news.title}</NewsTitle>
      <NewsDescription>{news.text}</NewsDescription>
      <NewsFooter>
        <NewsDate>{new Date(news.date).toLocaleDateString()}</NewsDate>
        <ReadMoreLink href={news.url} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </NewsFooter>
    </NewsCardContainer>
  );
};
