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

interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  // imageUrl,
  title,
  description,
  date,
  link,
}) => {
  return (
    <NewsCardContainer>
      <NewsImage
        // src={imageUrl || defaultImage}
        src={defaultImage}
        alt={title}
      />
      <NewsTitle>{title}</NewsTitle>
      <NewsDescription>{description}</NewsDescription>
      <NewsFooter>
        <NewsDate>{date}</NewsDate>
        <ReadMoreLink href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </NewsFooter>
    </NewsCardContainer>
  );
};
