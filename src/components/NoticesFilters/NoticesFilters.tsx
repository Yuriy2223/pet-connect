import { useSelector } from 'react-redux';
import {
  selectCategoryFilter,
  selectNoticeCategories,
  selectNoticePopularity,
  selectNoticePrice,
  selectNoticeSexes,
  selectNoticeSpecies,
  selectSexFilter,
  selectSpeciesFilter,
} from '../../redux/notices/selectors';
import {
  ClearButtonRatio,
  FilterRow,
  FiltersContainer,
  IconCloseRatio,
  RadioButtonInput,
  RadioButtonLabel,
  RadioGroup,
  ResetButton,
  SelectCategory,
  SelectGender,
  SelectType,
} from './NoticesFilters.styled';
import { useCallback, useEffect } from 'react';
import {
  fetchNoticesCategories,
  fetchNoticesSexes,
  fetchNoticesSpecies,
} from '../../redux/notices/operations';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import {
  resetFilters,
  setCategory,
  // setPopularity,
  // setPrice,
  setSex,
  setSpecies,
} from '../../redux/notices/slice';

export const NoticesFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector(selectNoticeCategories);
  const selectedCategory = useSelector(selectCategoryFilter);
  const sex = useSelector(selectNoticeSexes);
  const selectedSex = useSelector(selectSexFilter);
  const species = useSelector(selectNoticeSpecies);
  const selectedSpecies = useSelector(selectSpeciesFilter);
  const popularity = useSelector(selectNoticePopularity);
  const price = useSelector(selectNoticePrice);

  const fetchFiltersData = useCallback(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSpecies());
    dispatch(fetchNoticesSexes());
  }, [dispatch]);

  useEffect(() => {
    fetchFiltersData();
  }, [fetchFiltersData]);

  const handleCategoryChange = (selected: string) =>
    dispatch(setCategory(selected));

  const handleSexChange = (selected: string) => dispatch(setSex(selected));

  const handleSpeciesChange = (selected: string) =>
    dispatch(setSpecies(selected));

  const handleResetFilters = () => {
    dispatch(resetFilters());
    // dispatch(fetchNotices({ page: 1, perPage }));
  };
  const handleBtnReset = (field: string) => {
    handleFilterChange(field, null);
  };

  return (
    <FiltersContainer>
      <FilterRow>
        <SelectCategory
          options={[
            { value: '', label: 'Show all' },
            ...category.map(c => ({ value: c, label: c })),
          ]}
          placeholder="Category"
          onChange={selected => handleCategoryChange(selected?.value || '')}
          value={
            selectedCategory
              ? { value: selectedCategory, label: selectedCategory }
              : null
          }
        />
        <SelectGender
          options={[
            { value: '', label: 'Show all' },
            ...sex.map(s => ({ value: s, label: s })),
          ]}
          placeholder="Gender"
          onChange={selected => handleSexChange(selected?.value || '')}
          value={
            selectedSex ? { value: selectedSex, label: selectedSex } : null
          }
        />
        <SelectType
          options={[
            { value: '', label: 'Show all' },
            ...species.map(s => ({ value: s, label: s })),
          ]}
          placeholder="Type"
          onChange={selected => handleSpeciesChange(selected?.value || '')}
          value={
            selectedSpecies
              ? { value: selectedSpecies, label: selectedSpecies }
              : null
          }
        />
      </FilterRow>

      <RadioGroup>
        <RadioButtonLabel $isActive={popularity === value}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={popularity === value}
            value="popularity"
            onChange={e => {
              e.stopPropagation();
              dispatch(sortPopularityAsc());
            }}
          />
          Popularity
          <ClearButtonRatio
            $isActive={popularity === value}
            onClick={() => handleBtnReset('popularity')}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={popularity === 'unpopularity'}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={popularity === 'unpopularity'}
            value="unpopularity"
            onChange={() => onFilterChange('popularity', 'unpopularity')}
          />
          Unpopular
          <ClearButtonRatio
            $isActive={popularity === 'unpopularity'}
            onClick={() => handleBtnReset('popularity')}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={price === 'cheap'}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={price === 'cheap'}
            value="cheap"
            onChange={() => onFilterChange('price', 'cheap')}
          />
          Cheap
          <ClearButtonRatio
            $isActive={price === 'cheap'}
            onClick={() => handleBtnReset('price')}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={price === value}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={price === value}
            value="expensive"
            onChange={() => onFilterChange('price', 'expensive')}
          />
          Expensive
          <ClearButtonRatio
            $isActive={price === value}
            onClick={() => handleBtnReset('price')}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <ResetButton onClick={handleResetFilters}>Reset</ResetButton>
      </RadioGroup>
    </FiltersContainer>
  );
};

/********** */
// const handleFilterChange = (field: string, value: string | null) => {
//   switch (field) {
//     case 'search':
//       dispatch(setSearch(value as string));
//       break;
//     case 'category':
//       dispatch(setCategory(value));
//       break;
//     case 'sex':
//       dispatch(setSex(value));
//       break;
//     case 'species':
//       dispatch(setSpecies(value));
//       break;
//     case 'popularity':
//       dispatch(setPopularity(value as 'popularity' | 'unpopularity' | null));
//       break;
//     case 'price':
//       dispatch(setPrice(value as 'cheap' | 'expensive' | null));
//       break;
//     default:
//       break;
//   }
//   dispatch(fetchNotices({ page: 1, perPage }));
// };

// useEffect(() => {
//   dispatch(
//     fetchNotices({
//       page: currentPage,
//       perPage,
//       category,
//       sex,
//       species,
//       popularity,
//       price,
//     })
//   );
// }, [
//   currentPage,
//   perPage,
//   category,
//   sex,
//   species,
//   popularity,
//   price,
//   dispatch,
// ]);

// const handleResetFilters = () => {
//   dispatch(resetFilters());
//   // dispatch(fetchNotices({ page: 1, perPage }));
// };
// useEffect(() => {
//   dispatch(fetchNoticesCategories());
//   dispatch(fetchNoticesSpecies());
//   dispatch(fetchNoticesSexes());
// }, [dispatch]);
// const categories = useSelector(selectNoticeCategories);
// const sexes = useSelector(selectNoticeSexes);
// const species = useSelector(selectNoticeSpecies);
// const popularity = useSelector(selectNoticePopularity);
// const price = useSelector(selectNoticePrice);
{
  /* <LocationSelect
          options={locations}
          value={location}
          placeholder="Location"
          hideSelectedOptions={false}
          isMulti={false}
          onChange={location => handleFilterChange('location', location)}
        /> */
}
// const categoryOptions: CategoryOption[] = [
//   { value: 'Show all', label: 'Show all' },
//   ...categories.map(category => ({ value: category, label: category })),
// ];

// const genderOptions: CategoryOption[] = [
//   { value: 'Show all', label: 'Show all' },
//   ...genders.map(gender => ({ value: gender, label: gender })),
// ];

// const typeOptions: CategoryOption[] = [
//   { value: 'Show all', label: 'Show all' },
//   ...types.map(type => ({ value: type, label: type })),
// ];
/*************************************** */
// import {
//   ClearButtonRatio,
//   FilterRow,
//   FiltersContainer,
//   IconCloseRatio,
//   RadioButtonInput,
//   RadioButtonLabel,
//   RadioGroup,
//   ResetButton,
//   SelectCategory,
//   SelectGender,
//   SelectType,
// } from './NoticesFilters.styled';

// import { LocationSelect } from './LocationSelect';
// import { SearchField } from '../Common/SearchField/SearchField';
// import { OptionType } from '../../services/apiService';
// import { City } from '../../App.types';

// interface NoticesFiltersProps {
//   filters: {
//     category: OptionType | null;
//     gender: OptionType | null;
//     type: OptionType | null;
//     location: City | null;
//     sort: string | null;
//   };
//   categoryOptions: OptionType[];
//   genderOptions: OptionType[];
//   typeOptions: OptionType[];
//   onFilterChange: (field: string, value: any) => void;
//   onReset: () => void;
// }

// export const NoticesFilters: React.FC<NoticesFiltersProps> = ({
//   filters,
//   categoryOptions,
//   genderOptions,
//   typeOptions,
//   onFilterChange,
//   onReset,
// }) => {
//   return (
//     <FiltersContainer>
//       <FilterRow>
//         <SearchField
//           value={filters.search}
//           onSearch={query => onFilterChange('search', query)}
//         />

//         <SelectCategory
//           options={categoryOptions}
//           placeholder="Category"
//           value={filters.category}
//           onChange={option => onFilterChange('category', option)}
//         />
//         <SelectGender
//           options={genderOptions}
//           placeholder="By gender"
//           value={filters.gender}
//           onChange={option => onFilterChange('gender', option)}
//         />
//         <SelectType
//           options={typeOptions}
//           placeholder="By type"
//           value={filters.type}
//           onChange={option => onFilterChange('type', option)}
//           // }
//         />
//         <LocationSelect
//           value={filters.location}
//           onChange={location => onFilterChange('location', location)}
//         />
//       </FilterRow>

//       {/* <RadioGroup>
//         <RadioButtonLabel $isActive={filters.sort === 'popular'}>
//           <RadioButtonInput
//             type="radio"
//             name="sort"
//             value="popular"
//             checked={filters.sort === 'popular'}
//             onChange={() => onFilterChange('sort', 'popular')}
//           />
//           Popular
//           <ClearButtonRatio
//             type="button"
//             $isActive={filters.sort === 'popular'}
//             onClick={handleClearSort}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={filters.sort === 'unpopular'}>
//           <RadioButtonInput
//             type="radio"
//             name="sort"
//             value="unpopular"
//             checked={filters.sort === 'unpopular'}
//             onChange={() => handleFilterChange('sort', 'unpopular')}
//           />
//           Unpopular
//           <ClearButtonRatio
//             type="button"
//             $isActive={filters.sort === 'unpopular'}
//             onClick={handleClearSort}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={filters.sort === 'cheap'}>
//           <RadioButtonInput
//             type="radio"
//             name="sort"
//             value="cheap"
//             checked={filters.sort === 'cheap'}
//             onChange={() => handleFilterChange('sort', 'cheap')}
//           />
//           Cheap
//           <ClearButtonRatio
//             type="button"
//             $isActive={filters.sort === 'cheap'}
//             onClick={handleClearSort}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={filters.sort === 'expensive'}>
//           <RadioButtonInput
//             type="radio"
//             name="sort"
//             value="expensive"
//             checked={filters.sort === 'expensive'}
//             onChange={() => handleFilterChange('sort', 'expensive')}
//           />
//           Expensive
//           <ClearButtonRatio
//             type="button"
//             $isActive={filters.sort === 'expensive'}
//             onClick={handleClearSort}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <ResetButton onClick={handleReset}>Reset</ResetButton>
//       </RadioGroup> */}
//
//         <ResetButton onClick={onReset}>Reset</ResetButton>
//       </RadioGroup>
//     </FiltersContainer>
//   );
// };

/******************************************************* */
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Filters } from '../../pages/NoticesPage/NoticesPage';
// import {
//   selectNoticeCategories,
//   selectNoticeSexes,
//   selectNoticeSpecies,
// } from '../../redux/notices/selectors';
// import {
//   ClearButtonRatio,
//   FilterRow,
//   FiltersContainer,
//   IconCloseRatio,
//   RadioButtonInput,
//   RadioButtonLabel,
//   RadioGroup,
//   ResetButton,
//   SelectCategory,
//   SelectGender,
//   SelectType,
// } from './NoticesFilters.styled';

// interface CategoryOption {
//   value: string;
//   label: string;
// }

// interface NoticesFiltersProps {
//   onReset: () => void;
//   handleFilterSelect: (field: keyof Filters, value: string) => void;
//   selectedCategory: string;
//   selectedSpecies: string;
//   selectedSex: string;
//   handleSortPopularity: () => void;
//   handleSortPrice: () => void;
//   selectedPopularity?: number;
//   selectedPrice?: number;
//   popularitySort: 'asc' | 'desc' | undefined;
//   priceSort: 'asc' | 'desc' | undefined;
// }

// export const NoticesFilters: React.FC<NoticesFiltersProps> = ({
//   selectedCategory,
//   selectedSpecies,
//   selectedSex,
//   onReset,
//   handleFilterSelect,
//   handleSortPopularity,
//   handleSortPrice,
//   selectedPopularity,
//   selectedPrice,
//   popularitySort,
//   priceSort,
// }) => {
//   const categories = useSelector(selectNoticeCategories);
//   const genders = useSelector(selectNoticeSexes);
//   const types = useSelector(selectNoticeSpecies);

//   const categoryOptions: CategoryOption[] = [
//     { value: 'Show all', label: 'Show all' },
//     ...categories.map(category => ({ value: category, label: category })),
//   ];

//   const genderOptions: CategoryOption[] = [
//     { value: 'Show all', label: 'Show all' },
//     ...genders.map(gender => ({ value: gender, label: gender })),
//   ];

//   const typeOptions: CategoryOption[] = [
//     { value: 'Show all', label: 'Show all' },
//     ...types.map(type => ({ value: type, label: type })),
//   ];

//   return (
//     <FiltersContainer>
//       <FilterRow>
//         <SelectCategory
//           options={categoryOptions}
//           placeholder="Category"
//           value={
//             categoryOptions.find(option => option.value === selectedCategory) ||
//             null
//           }
//           onChange={selectedOption =>
//             handleFilterSelect('category', selectedOption?.value || '')
//           }
//         />
//         <SelectGender
//           options={genderOptions}
//           placeholder="By gender"
//           value={
//             genderOptions.find(option => option.value === selectedSex) || null
//           }
//           onChange={selectedOption =>
//             handleFilterSelect('sex', selectedOption?.value || '')
//           }
//         />
//         <SelectType
//           options={typeOptions}
//           placeholder="By type"
//           value={
//             typeOptions.find(option => option.value === selectedSpecies) || null
//           }
//           onChange={selectedOption =>
//             handleFilterSelect('species', selectedOption?.value || '')
//           }
//         />
//       </FilterRow>

//       <RadioGroup>
//         <RadioButtonLabel $isActive={selectedPopularity === 1}>
//           <RadioButtonInput
//             type="radio"
//             name="radioBtn"
//             value="popular"
//             checked={popularitySort === 'asc'}
//             onChange={handleSortPopularity}
//           />
//           Popularity
//           <ClearButtonRatio
//             $isActive={selectedPopularity === 1}
//             onClick={() => handleFilterSelect('popularity', undefined)}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={selectedPopularity === 0}>
//           <RadioButtonInput
//             type="radio"
//             name="radioBtn"
//             value="unpopular"
//             checked={popularitySort === 'desc'}
//             onChange={handleSortPopularity}
//           />
//           Unpopular
//           <ClearButtonRatio
//             $isActive={selectedPopularity === 0}
//             onClick={() => handleFilterSelect('popularity', undefined)}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={selectedPrice === 1}>
//           <RadioButtonInput
//             type="radio"
//             name="radioBtn"
//             value="cheap"
//             checked={priceSort === 'asc'}
//             onChange={handleSortPrice}
//           />
//           Cheap
//           <ClearButtonRatio
//             $isActive={selectedPrice === 1}
//             onClick={() => handleFilterSelect('price', undefined)}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <RadioButtonLabel $isActive={selectedPrice === 0}>
//           <RadioButtonInput
//             type="radio"
//             name="radioBtn"
//             value="expensive"
//             checked={priceSort === 'desc'}
//             onChange={handleSortPrice}
//           />
//           Expensive
//           <ClearButtonRatio
//             $isActive={selectedPrice === 0}
//             onClick={() => handleFilterSelect('price', undefined)}
//           >
//             <IconCloseRatio width={16} height={16} iconName="close" />
//           </ClearButtonRatio>
//         </RadioButtonLabel>

//         <ResetButton onClick={onReset}>Reset</ResetButton>
//       </RadioGroup>
//     </FiltersContainer>
//   );
// };
/******************************* */
