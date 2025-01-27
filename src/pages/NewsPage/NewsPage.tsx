import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchField } from '../../components/Common/SearchField/SearchField';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { Pagination } from '../../components/Pagination/Pagination';
import {
  NewsList,
  NewsPageContainer,
  NewsSearchWrapper,
  PaginationWrapper,
} from './NewsPage.styled';
import { AppDispatch } from '../../redux/store';
import { fetchNews } from '../../redux/news/operations';
import {
  selectNewsList,
  selectTotalPages,
  selectCurrentPage,
  selectPerPage,
} from '../../redux/news/selectors';

export const NewsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const newsData = useSelector(selectNewsList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    dispatch(fetchNews(currentPage, searchQuery, perPage));
  }, [currentPage, searchQuery, perPage, dispatch]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(fetchNews(1, query, perPage));
  };

  const handlePageChange = (page: number) => {
    dispatch(fetchNews(page, searchQuery, perPage));
  };

  return (
    <NewsPageContainer>
      <NewsSearchWrapper>
        <h1>News</h1>
        <SearchField onSearch={handleSearch} />
      </NewsSearchWrapper>

      <NewsList>
        {newsData?.length ? (
          newsData.map(news => (
            <li key={news._id}>
              <NewsCard
                _id={news._id}
                imgUrl={news.imgUrl}
                title={news.title}
                text={news.text}
                date={new Date(news.date).toLocaleDateString()}
                url={news.url}
              />
            </li>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </NewsList>

      <PaginationWrapper>
        <Pagination
          // totalItems={totalPages * perPage} // Загальна кількість новин
          // itemsPerPage={perPage} // Ліміт новин на сторінку
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </NewsPageContainer>
  );
};
