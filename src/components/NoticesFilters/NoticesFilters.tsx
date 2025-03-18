import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import { AppDispatch } from '../../redux/store';
import { resetFilters, setFilter } from '../../redux/notices/slice';
import { City, Filters } from '../../App.types';
import { selectLocations } from '../../redux/cities/selectors';
import {
  selectFilters,
  selectNoticeCategories,
  selectNoticeSexes,
  selectNoticeSpecies,
} from '../../redux/notices/selectors';
import {
  fetchNoticesCategories,
  fetchNoticesSexes,
  fetchNoticesSpecies,
} from '../../redux/notices/operations';
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
import { SearchField } from '../Common/SearchField/SearchField';

import { LocationSelect } from '../Common/LocationSelect/LocationSelect';
import { fetchCityLocations } from '../../redux/cities/operations';

export const NoticesFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(selectFilters);
  const category = useSelector(selectNoticeCategories);
  const sex = useSelector(selectNoticeSexes);
  const species = useSelector(selectNoticeSpecies);
  const locations = useSelector(selectLocations);

  const fetchFiltersData = useCallback(() => {
    dispatch(fetchNoticesCategories());
    dispatch(fetchNoticesSpecies());
    dispatch(fetchNoticesSexes());
    dispatch(fetchCityLocations());
  }, [dispatch]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      fetchFiltersData();
      isFirstRender.current = false;
    }
  }, [fetchFiltersData]);

  const handleFilterChange = (filter: Filters) => {
    dispatch(setFilter(filter));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleCategoryChange = (selected: string | null) =>
    handleFilterChange({ ...filters, category: selected ?? '' });

  const handleSexChange = (selected: string | null) =>
    handleFilterChange({ ...filters, sex: selected ?? '' });

  const handleSpeciesChange = (selected: string | null) =>
    handleFilterChange({ ...filters, species: selected ?? '' });

  const handleSortPopularityAsc = () => {
    handleFilterChange({ ...filters, byPopularity: true, byPrice: null });
  };

  const handleSortPopularityDesc = () => {
    handleFilterChange({ ...filters, byPopularity: false, byPrice: null });
  };

  const handleSortPriceAsc = () => {
    handleFilterChange({ ...filters, byPrice: true, byPopularity: null });
  };

  const handleSortPriceDesc = () => {
    handleFilterChange({ ...filters, byPrice: false, byPopularity: null });
  };

  const handleSortSearch = (query: string) => {
    handleFilterChange({ ...filters, keyword: query });
  };

  const handleLocationChange = (selectedLocation: City | null) =>
    handleFilterChange({
      ...filters,
      locationId: selectedLocation ? selectedLocation._id : null,
    });

  return (
    <FiltersContainer>
      <FilterRow>
        <SearchField
          value={filters.keyword ?? undefined}
          onSearch={handleSortSearch}
        />

        <SelectCategory
          options={[
            { value: '', label: 'Show all' },
            ...category.map(c => ({ value: c, label: c })),
          ]}
          onChange={selected => handleCategoryChange(selected?.value || null)}
          value={
            filters.category
              ? { value: filters.category, label: filters.category }
              : null
          }
          placeholder="Category"
        />
        <SelectGender
          options={[
            { value: '', label: 'Show all' },
            ...sex.map(s => ({ value: s, label: s })),
          ]}
          placeholder="Gender"
          onChange={selected => handleSexChange(selected?.value || null)}
          value={
            filters.sex ? { value: filters.sex, label: filters.sex } : null
          }
        />
        <SelectType
          options={[
            { value: '', label: 'Show all' },
            ...species.map(s => ({ value: s, label: s })),
          ]}
          placeholder="Type"
          onChange={selected => handleSpeciesChange(selected?.value || null)}
          value={
            filters.species
              ? { value: filters.species, label: filters.species }
              : null
          }
        />
        <LocationSelect
          value={locations.find(loc => loc._id === filters.locationId) || null}
          onChange={handleLocationChange}
        />
      </FilterRow>

      <RadioGroup>
        <RadioButtonLabel $isActive={filters.byPopularity === false}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={filters.byPopularity === false}
            onChange={handleSortPopularityDesc}
          />
          Popularity
          <ClearButtonRatio
            $isActive={filters.byPopularity === false}
            onClick={() =>
              handleFilterChange({ ...filters, byPopularity: null })
            }
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.byPopularity === true}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={filters.byPopularity === true}
            onChange={handleSortPopularityAsc}
          />
          Unpopular
          <ClearButtonRatio
            $isActive={filters.byPopularity === true}
            onClick={() =>
              handleFilterChange({ ...filters, byPopularity: null })
            }
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.byPrice === false}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={filters.byPrice === false}
            onChange={handleSortPriceDesc}
          />
          Cheap
          <ClearButtonRatio
            $isActive={filters.byPrice === false}
            onClick={() => handleFilterChange({ ...filters, byPrice: null })}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.byPrice === true}>
          <RadioButtonInput
            type="radio"
            name="sortBtn"
            checked={filters.byPrice === true}
            onChange={handleSortPriceAsc}
          />
          Expensive
          <ClearButtonRatio
            $isActive={filters.byPrice === true}
            onClick={() => handleFilterChange({ ...filters, byPrice: null })}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <ResetButton onClick={handleResetFilters}>Reset</ResetButton>
      </RadioGroup>
    </FiltersContainer>
  );
};
