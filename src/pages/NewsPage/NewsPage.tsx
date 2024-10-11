import React, { useEffect, useState } from 'react';
import { SearchField } from '../../components/SearchField/SearchField';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { Pagination } from '../../components/Pagination/Pagination';
import {
  NewsList,
  NewsPageContainer,
  NewsSearchWrapper,
  PaginationWrapper,
} from './NewsPage.styled';

import newsDataJson from '../../components/NewsCard/NewsCard.json';

export const NewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState(newsDataJson); // Використовуємо дані з JSON
  const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка
  const itemsPerPage = 6; // Кількість карток на сторінці

  // Розраховуємо індекси новин для поточної сторінки
  const lastNewsIndex = currentPage * itemsPerPage;
  const firstNewsIndex = lastNewsIndex - itemsPerPage;
  const currentNews = newsData.slice(firstNewsIndex, lastNewsIndex);

  useEffect(() => {
    setNewsData(newsDataJson); // стан даними з JSON
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <NewsPageContainer>
      <NewsSearchWrapper>
        <h1>News</h1>
        <SearchField onSearch={query => console.log('Searching for:', query)} />
      </NewsSearchWrapper>
      <NewsList>
        {currentNews.map(news => (
          <li key={news.id}>
            <NewsCard
              imageUrl={news.imageUrl}
              title={news.title}
              description={news.description}
              date={news.date}
              link={news.link}
            />
          </li>
        ))}
      </NewsList>
      <PaginationWrapper>
        <Pagination
          totalItems={newsData.length} // Загальна кількість новин
          itemsPerPage={itemsPerPage} // Кількість карток на сторінці
          currentPage={currentPage} // Поточна сторінка
          onPageChange={handlePageChange} // Обробник зміни сторінки
        />
      </PaginationWrapper>
    </NewsPageContainer>
  );
};
