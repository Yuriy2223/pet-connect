import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchField } from '../../components/Common/SearchField/SearchField';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { AppDispatch } from '../../redux/store';
import { fetchNews } from '../../redux/news/operations';
import {
  selectNewsList,
  selectTotalPages,
  selectCurrentPage,
  selectPerPage,
} from '../../redux/news/selectors';
import {
  NewsList,
  NewsPageContainer,
  NewsSearchWrapper,
  PaginationWrapper,
} from './NewsPage.styled';

export const NewsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const newsData = useSelector(selectNewsList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, keyword: searchQuery, perPage }));
  }, [currentPage, searchQuery, perPage, dispatch]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(fetchNews({ page: 1, keyword: query, perPage }));
  };

  const handlePageChange = (page: number) => {
    dispatch(fetchNews({ page, keyword: searchQuery, perPage }));
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
              <NewsCard news={news} />
            </li>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </NewsList>

      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </NewsPageContainer>
  );
};
