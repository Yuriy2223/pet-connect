import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../components/Pagination/Pagination';
import { fetchFavorites, fetchNotices } from '../../redux/notices/operations';
import { AppDispatch } from '../../redux/store';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
// import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import {
  selectCurrentPage,
  selectFavorites,
  selectNoticesList,
  selectPerPage,
  selectTotalPages,
} from '../../redux/notices/selectors';
import {
  NoticesList,
  NoticesPageContainer,
  NoticesSearchWrapper,
  PaginationWrapper,
} from './NoticesPage.styled';

export const NoticesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const noticesData = useSelector(selectNoticesList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const isSignedIn = useSelector(selectIsSignedIn);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchNotices({ page: currentPage, perPage }));
  }, [currentPage, perPage, dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isSignedIn]);

  const handlePageChange = (page: number) => {
    dispatch(fetchNotices({ page, perPage }));
  };
  // const handleFilters = (filters: FilterType) => {
  //   console.log('Applied filters:', filters);
  //   //  логіку для обробки фільтрів
  // };
  // console.log('noticesData from Redux:', noticesData);
  return (
    <NoticesPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearchWrapper>
        {/* <NoticesFilters
        // onFilters={handleFilters}
        /> */}
      </NoticesSearchWrapper>
      <NoticesList>
        {noticesData?.length ? (
          noticesData.map(notice =>
            notice._id ? (
              <li key={notice._id}>
                <NoticesCard notice={notice} favorites={favorites} />
              </li>
            ) : null
          )
        ) : (
          <p>No notices available.</p>
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
