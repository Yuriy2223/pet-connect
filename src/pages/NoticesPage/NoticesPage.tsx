import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../../components/Pagination/Pagination';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
import { Loader } from '../../components/loader/Loader';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { fetchFavorites, fetchNotices } from '../../redux/notices/operations';
import { useAppDispatch } from '../../redux/store';
import {
  selectCurrentPage,
  selectFavorites,
  selectFilters,
  selectNoticesList,
  selectNoticesLoading,
  selectPerPage,
  selectTotalPages,
} from '../../redux/notices/selectors';
import {
  NotFoundMessage,
  NoticesList,
  NoticesPageContainer,
  NoticesSearchWrapper,
  NoticesTitle,
  PaginationWrapper,
} from './NoticesPage.styled';

export const NoticesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const noticesData = useSelector(selectNoticesList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const isSignedIn = useSelector(selectIsSignedIn);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectNoticesLoading);
  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        perPage,
        ...filter,
      })
    );
  }, [currentPage, perPage, filter, dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isSignedIn]);

  const handlePageChange = (page: number) => {
    dispatch(fetchNotices({ page, perPage, totalPages }));
  };

  return (
    <NoticesPageContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <NoticesSearchWrapper>
        <NoticesFilters />
      </NoticesSearchWrapper>
      <NoticesList>
        {isLoading ? (
          <Loader />
        ) : noticesData?.length ? (
          noticesData.map(notice =>
            notice._id ? (
              <li key={notice._id}>
                <NoticesCard notice={notice} favorites={favorites} />
              </li>
            ) : null
          )
        ) : (
          <NotFoundMessage>Nothing was found for your search.</NotFoundMessage>
        )}
      </NoticesList>
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </NoticesPageContainer>
  );
};
