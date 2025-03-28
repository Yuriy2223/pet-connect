import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchField } from '../../components/Common/SearchField/SearchField';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { useAppDispatch } from '../../redux/store';
import { fetchNews } from '../../redux/news/operations';
import { Loader } from '../../components/loader/Loader';
import { setNewsFilter } from '../../redux/news/slice';
import {
  selectNewsList,
  selectTotalPages,
  selectCurrentPage,
  selectPerPage,
  selectNewsLoading,
  selectNewsFilter,
} from '../../redux/news/selectors';
import {
  NewsList,
  NewsPageContainer,
  NewsSearchWrapper,
  NotFoundMessage,
  PaginationWrapper,
} from './NewsPage.styled';

export const NewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const newsData = useSelector(selectNewsList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const isLoading = useSelector(selectNewsLoading);
  const search = useSelector(selectNewsFilter);

  useEffect(() => {
    dispatch(
      fetchNews({
        page: currentPage,
        ...search,
        perPage,
      })
    );
  }, [currentPage, search, perPage, dispatch]);

  const handleSearch = (query: string) => {
    dispatch(setNewsFilter({ keyword: query }));
  };

  const handlePageChange = (page: number) => {
    dispatch(
      fetchNews({
        page,
        keyword: search.keyword,
        perPage,
      })
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NewsPageContainer>
      <NewsSearchWrapper>
        <h1>News</h1>
        <SearchField
          value={search.keyword ?? undefined}
          onSearch={handleSearch}
        />
      </NewsSearchWrapper>

      <NewsList>
        {newsData?.length ? (
          newsData.map(news => (
            <li key={news._id}>
              <NewsCard news={news} />
            </li>
          ))
        ) : (
          <NotFoundMessage>Nothing was found for your search.</NotFoundMessage>
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
