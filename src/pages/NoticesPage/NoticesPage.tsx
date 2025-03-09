import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../components/Pagination/Pagination';
import { AppDispatch } from '../../redux/store';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
import { Loader } from '../../components/loader/Loader';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import {
  fetchFavorites,
  fetchNotices,
  fetchNoticesCategories,
  fetchNoticesSexes,
  fetchNoticesSpecies,
} from '../../redux/notices/operations';
import {
  selectCurrentPage,
  selectFavorites,
  selectNoticesList,
  selectNoticesLoading,
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

  const [filters, setFilters] = useState<Filters>({
    category: 'Show all',
    gender: 'Show all',
    type: 'Show all',
  });

  const handleResetFilters = () => {
    setFilters({
      category: 'Show all',
      gender: 'Show all',
      type: 'Show all',
    });
  };

  useEffect(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSexes());
    dispatch(fetchNoticesSpecies());
  }, [dispatch]);

  const handleFilterChange = (field: keyof Filters, value: string | null) => {
    console.log(`Changing filter: ${field} -> ${value}`);
    setFilters(prev => ({
      ...prev,
      [field]: value === 'Show all' ? null : value,
    }));
  };

  const normalizeFilterValue = (value: string) =>
    value === 'Show all' ? null : value;

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        perPage,
        category: normalizeFilterValue(filters.category),
        gender: normalizeFilterValue(filters.gender),
        type: normalizeFilterValue(filters.type),
      })
    );
  }, [currentPage, perPage, filters, dispatch]);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, isSignedIn]);

  const handlePageChange = (page: number) => {
    dispatch(fetchNotices({ page, perPage, ...filters }));
  };

  return (
    <NoticesPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearchWrapper>
        <NoticesFilters
          selectedCategory={filters.category}
          selectedGender={filters.gender}
          selectedType={filters.type}
          handleFilterChange={handleFilterChange}
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

// onCategoryChange={value => handleFilterChange('category', value)}
// onGenderChange={value => handleFilterChange('gender', value)}
// onTypeChange={value => handleFilterChange('type', value)}
// const handleCategoryChange = (category: string) => {
//   setFilters({ category });
//   dispatch(fetchNotices({ page: 1, perPage, category }));
// };
// gender: string;
// type: string;
// search: string;
// sort: string;
// location: City | null;
// export interface Filters {
//   category: string;
//   gender: string;
//   type: string;
//   search: string;
//   sort: string;
//   location: City | null;
// }
// const [filters, setFilters] = useState<Filters>({
//   category: 'Show all',
//   gender: 'Show all',
//   type: 'Show all',
//   search: '',
//   sort: '',
//   location: null,
// });
// const categoryOptions = useSelector(selectNoticeCategories);
// const genderOptions = useSelector(selectNoticeSexes);
// const typeOptions = useSelector(selectNoticeSpecies);
// const handleResetFilters = () => {
//   setFilters({
//     category: 'Show all',
//     gender: 'Show all',
//     type: 'Show all',
//     search: '',
//     sort: '',
//     location: null,
//   });
// };
// filters={filters}
// categoryOptions={categoryOptions}
// genderOptions={genderOptions}
// typeOptions={typeOptions}
// onFilterChange={handleFilterChange}
// onLocationChange={handleLocationChange}
// useEffect(() => {
//   dispatch(fetchNoticesCategories());
//   dispatch(fetchNoticesSexes());
//   dispatch(fetchNoticesSpecies());
// }, [dispatch]);
// const handleFilterChange = <T extends keyof Filters>(
//   field: T,
//   value: Filters[T]
// ) => {
//   setFilters(prev => ({ ...prev, [field]: value }));
// };

// const handleLocationChange = (location: City | null) => {
//   setFilters(prev => ({ ...prev, location }));
// };
