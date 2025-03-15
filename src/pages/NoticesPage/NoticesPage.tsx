import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../components/Pagination/Pagination';
import { AppDispatch } from '../../redux/store';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
import { Loader } from '../../components/loader/Loader';
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
import { fetchFavorites, fetchNotices } from '../../redux/notices/operations';
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

export const NoticesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const noticesData = useSelector(selectNoticesList);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const isSignedIn = useSelector(selectIsSignedIn);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectNoticesLoading);

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
      <h1>Find your favorite pet</h1>
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

///////////////////////*************************** */
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Pagination } from '../../components/Pagination/Pagination';
// import { AppDispatch } from '../../redux/store';
// import { selectIsSignedIn } from '../../redux/auth/selectors';
// import { NoticesCard } from '../../components/NoticesCard/NoticesCard';
// import { Loader } from '../../components/loader/Loader';
// import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
// import {
//   fetchFavorites,
//   fetchNotices,
//   fetchNoticesCategories,
//   fetchNoticesSexes,
//   fetchNoticesSpecies,
// } from '../../redux/notices/operations';
// import {
//   selectCurrentPage,
//   selectFavorites,
//   selectNoticesList,
//   selectNoticesLoading,
//   selectPerPage,
//   selectTotalPages,
// } from '../../redux/notices/selectors';
// import {
//   NoticesList,
//   NoticesPageContainer,
//   NoticesSearchWrapper,
//   PaginationWrapper,
// } from './NoticesPage.styled';

// export interface Filters {
//   category: string;
//   sex: string;
//   species: string;
//   popularity?: number;
//   price?: number;
// }

// export const NoticesPage: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const noticesData = useSelector(selectNoticesList);
//   const totalPages = useSelector(selectTotalPages);
//   const currentPage = useSelector(selectCurrentPage);
//   const perPage = useSelector(selectPerPage);
//   const isSignedIn = useSelector(selectIsSignedIn);
//   const favorites = useSelector(selectFavorites);
//   const isLoading = useSelector(selectNoticesLoading);

//   const [filters, setFilters] = useState<Filters>({
//     category: '',
//     sex: '',
//     species: '',
//     popularity: undefined,
//     price: undefined,
//   });

//   const [popularitySort, setPopularitySort] = useState<
//     'asc' | 'desc' | undefined
//   >(undefined);
//   const [priceSort, setPriceSort] = useState<'asc' | 'desc' | undefined>(
//     undefined
//   );

//   const handleSortPopularity = () => {
//     setPopularitySort(prevSort => (prevSort === 'asc' ? 'desc' : 'asc'));
//   };

//   const handleSortPrice = () => {
//     setPriceSort(prevSort => (prevSort === 'asc' ? 'desc' : 'asc'));
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       category: '',
//       sex: '',
//       species: '',
//       popularity: undefined,
//       price: undefined,
//     });
//     setPopularitySort(undefined);
//     setPriceSort(undefined);
//   };

//   useEffect(() => {
//     dispatch(fetchNoticesCategories());
//     dispatch(fetchNoticesSpecies());
//     dispatch(fetchNoticesSexes());
//   }, [dispatch]);

//   const handleFilterSelect = (field: keyof Filters, value: string) => {
//     setFilters(prev => ({
//       ...prev,
//       [field]: value === 'Show all' ? '' : value,
//     }));
//   };

//   useEffect(() => {
//     dispatch(
//       fetchNotices({
//         page: currentPage,
//         perPage,
//         popularity: popularitySort,
//         price: priceSort,
//         ...filters,
//       })
//     );
//   }, [currentPage, perPage, popularitySort, priceSort, filters, dispatch]);

//   useEffect(() => {
//     if (isSignedIn) {
//       dispatch(fetchFavorites());
//     }
//   }, [dispatch, isSignedIn]);

//   const handlePageChange = (page: number) => {
//     dispatch(fetchNotices({ page, perPage, totalPages, ...filters }));
//   };

//   return (
//     <NoticesPageContainer>
//       <h1>Find your favorite pet</h1>
//       <NoticesSearchWrapper>
//         <NoticesFilters
//           selectedCategory={filters.category}
//           selectedSex={filters.sex}
//           selectedSpecies={filters.species}
//           handleFilterSelect={handleFilterSelect}
//           onReset={handleResetFilters}
//           selectedPopularity={filters.popularity}
//           selectedPrice={filters.price}
//           popularitySort={popularitySort}
//           priceSort={priceSort}
//           handleSortPopularity={() =>
//             setPopularitySort(prevSort => (prevSort === 'asc' ? 'desc' : 'asc'))
//           }
//           handleSortPrice={() =>
//             setPriceSort(prevSort => (prevSort === 'asc' ? 'desc' : 'asc'))
//           }
//         />
//       </NoticesSearchWrapper>
//       <NoticesList>
//         {isLoading ? (
//           <Loader />
//         ) : noticesData?.length ? (
//           noticesData.map(notice =>
//             notice._id ? (
//               <li key={notice._id}>
//                 <NoticesCard notice={notice} favorites={favorites} />
//               </li>
//             ) : null
//           )
//         ) : (
//           <p>No notices available.</p>
//         )}
//       </NoticesList>
//       <PaginationWrapper>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </PaginationWrapper>
//     </NoticesPageContainer>
//   );
// };
/************************************* */
