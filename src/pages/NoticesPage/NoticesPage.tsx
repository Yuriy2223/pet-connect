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
import { City } from '../../App.types';
import { fetchCityLocations } from '../../redux/cities/operations';

export interface Filters {
  category: string;
  gender: string;
  type: string;
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

  const [filters, setFilters] = useState<Filters>({
    category: '',
    gender: '',
    type: '',
    location: null,
  });

  const handleResetFilters = () => {
    setFilters({
      category: '',
      gender: '',
      type: '',
      location: null,
    });
  };

  useEffect(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSexes());
    dispatch(fetchNoticesSpecies());
    dispatch(fetchCityLocations());
  }, [dispatch]);

  const handleFilterChange = (
    field: keyof Filters,
    value: string | City | ''
  ) => {
    setFilters(prev => ({
      ...prev,
      [field]: value === 'Show all' ? '' : value,
    }));
  };

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        perPage,
        ...filters,
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
          selectedLocation={filters.location}
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
/********************************** */
// const handleFilterChange = (field: keyof Filters, value: string) => {
//   setFilters(prev => ({
//     ...prev,
//     [field]: value === 'Show all' ? '' : value,
//   }));
// };
// selectedCategory={filters.category || 'Show all'}
// selectedGender={filters.gender || 'Show all'}
// selectedType={filters.type || 'Show all'}
// selectedLocation={filters.location || ''}
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

// const handleLocationChange = (location: City | null) => {
//   setFilters(prev => ({ ...prev, location }));
// };
