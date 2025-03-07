import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../components/Pagination/Pagination';
import {
  fetchFavorites,
  fetchNotices,
  fetchNoticesCategories,
  fetchNoticesSexes,
  fetchNoticesSpecies,
} from '../../redux/notices/operations';
import { AppDispatch } from '../../redux/store';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
import { Loader } from '../../components/loader/Loader';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { City } from '../../App.types';
import {
  selectCurrentPage,
  selectFavorites,
  selectNoticeCategories,
  selectNoticeSexes,
  selectNoticesList,
  selectNoticesLoading,
  selectNoticeSpecies,
  selectPerPage,
  selectTotalPages,
} from '../../redux/notices/selectors';
import {
  NoticesList,
  NoticesPageContainer,
  NoticesSearchWrapper,
  PaginationWrapper,
} from './NoticesPage.styled';

export interface Filters {
  category: string;
  gender: string;
  type: string;
  search: string;
  sort: string;
  location: City | null;
}

export const NoticesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const noticesData = useSelector(selectNoticesList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const isSignedIn = useSelector(selectIsSignedIn);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectNoticesLoading);
  const categoryOptions = useSelector(selectNoticeCategories);
  const genderOptions = useSelector(selectNoticeSexes);
  const typeOptions = useSelector(selectNoticeSpecies);
  const [filters, setFilters] = useState<Filters>({
    category: 'Show all',
    gender: 'Show all',
    type: 'Show all',
    search: '',
    sort: '',
    location: null,
  });

  useEffect(() => {
    dispatch(fetchNotices({ page: currentPage, perPage, ...filters }));
  }, [currentPage, perPage, filters, dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isSignedIn]);

  useEffect(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSexes());
    dispatch(fetchNoticesSpecies());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(fetchNotices({ page, perPage, ...filters }));
  };

  const handleFilterChange = <T extends keyof Filters>(
    field: T,
    value: Filters[T]
  ) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationChange = (location: City | null) => {
    setFilters(prev => ({ ...prev, location }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'Show all',
      gender: 'Show all',
      type: 'Show all',
      search: '',
      sort: '',
      location: null,
    });
  };

  return (
    <NoticesPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearchWrapper>
        <NoticesFilters
          filters={filters}
          categoryOptions={categoryOptions}
          genderOptions={genderOptions}
          typeOptions={typeOptions}
          onFilterChange={handleFilterChange}
          onLocationChange={handleLocationChange}
          onReset={handleResetFilters}
        />
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
