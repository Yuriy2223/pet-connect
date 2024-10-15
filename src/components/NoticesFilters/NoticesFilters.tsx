import React, { useState, useEffect } from 'react';
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
import {
  fetchCategories,
  fetchGenders,
  fetchTypes,
  OptionType,
} from '../../services/apiService';
import { LocationSelect } from './LocationSelect';
import { SearchField } from '../Common/SearchField/SearchField';

export const NoticesFilters: React.FC = () => {
  const [categoryOptions, setCategoryOptions] = useState<OptionType[]>([]);
  const [genderOptions, setGenderOptions] = useState<OptionType[]>([]);
  const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
  const [filters, setFilters] = useState({
    category: null as OptionType | null,
    gender: null as OptionType | null,
    type: null as OptionType | null,
    location: null as OptionType | null,
    sort: null as string | null,
  });

  // Викликаємо функції для отримання даних з бекенду при завантаженні компонента
  useEffect(() => {
    const fetchData = async () => {
      const categories = await fetchCategories();
      const genders = await fetchGenders();
      const types = await fetchTypes();
      setCategoryOptions(categories);
      setGenderOptions(genders);
      setTypeOptions(types);
    };
    fetchData();
  }, []);

  // Функція для зміни фільтра
  const handleFilterChange = (field: string, value: string | null) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleClearSort = () => {
    setFilters(prev => ({ ...prev, sort: null }));
  };

  // Очищення фільтрів до дефолтних значень
  const handleReset = () => {
    setFilters({
      category: null,
      gender: null,
      type: null,
      location: null,
      sort: null,
    });
  };

  return (
    <FiltersContainer>
      <FilterRow>
        <SearchField
          onSearch={(query: string) => console.log(`Searching for ${query}`)}
        />
        <SelectCategory
          options={categoryOptions}
          placeholder="Category"
          value={filters.category}
          onChange={option =>
            handleFilterChange(
              'category',
              (option as OptionType | null)?.value || null
            )
          }
        />
        <SelectGender
          options={genderOptions}
          placeholder="By gender"
          value={filters.gender}
          onChange={option =>
            handleFilterChange(
              'gender',
              (option as OptionType | null)?.value || null
            )
          }
        />
        <SelectType
          options={typeOptions}
          placeholder="By type"
          value={filters.type}
          onChange={option =>
            handleFilterChange(
              'type',
              (option as OptionType | null)?.value || null
            )
          }
        />
        <LocationSelect />
      </FilterRow>

      <RadioGroup>
        <RadioButtonLabel $isActive={filters.sort === 'popular'}>
          <RadioButtonInput
            type="radio"
            name="sort"
            value="popular"
            checked={filters.sort === 'popular'}
            onChange={() => handleFilterChange('sort', 'popular')}
          />
          Popular
          <ClearButtonRatio
            type="button"
            $isActive={filters.sort === 'popular'}
            onClick={handleClearSort}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.sort === 'unpopular'}>
          <RadioButtonInput
            type="radio"
            name="sort"
            value="unpopular"
            checked={filters.sort === 'unpopular'}
            onChange={() => handleFilterChange('sort', 'unpopular')}
          />
          Unpopular
          <ClearButtonRatio
            type="button"
            $isActive={filters.sort === 'unpopular'}
            onClick={handleClearSort}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.sort === 'cheap'}>
          <RadioButtonInput
            type="radio"
            name="sort"
            value="cheap"
            checked={filters.sort === 'cheap'}
            onChange={() => handleFilterChange('sort', 'cheap')}
          />
          Cheap
          <ClearButtonRatio
            type="button"
            $isActive={filters.sort === 'cheap'}
            onClick={handleClearSort}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <RadioButtonLabel $isActive={filters.sort === 'expensive'}>
          <RadioButtonInput
            type="radio"
            name="sort"
            value="expensive"
            checked={filters.sort === 'expensive'}
            onChange={() => handleFilterChange('sort', 'expensive')}
          />
          Expensive
          <ClearButtonRatio
            type="button"
            $isActive={filters.sort === 'expensive'}
            onClick={handleClearSort}
          >
            <IconCloseRatio width={16} height={16} iconName="close" />
          </ClearButtonRatio>
        </RadioButtonLabel>

        <ResetButton onClick={handleReset}>Reset</ResetButton>
      </RadioGroup>
    </FiltersContainer>
  );
};
