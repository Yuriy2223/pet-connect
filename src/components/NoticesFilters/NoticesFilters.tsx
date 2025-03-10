import React from 'react';
import { useSelector } from 'react-redux';
import { Filters } from '../../pages/NoticesPage/NoticesPage';
import {
  selectNoticeCategories,
  selectNoticeSexes,
  selectNoticeSpecies,
} from '../../redux/notices/selectors';
import {
  FilterRow,
  FiltersContainer,
  RadioGroup,
  ResetButton,
  SelectCategory,
  SelectGender,
  SelectType,
} from './NoticesFilters.styled';

interface CategoryOption {
  value: string;
  label: string;
}

interface NoticesFiltersProps {
  onReset: () => void;
  handleFilterChange: (field: keyof Filters, value: string) => void;
  selectedCategory: string;
  selectedGender: string;
  selectedType: string;
}

export const NoticesFilters: React.FC<NoticesFiltersProps> = ({
  onReset,
  handleFilterChange,
  selectedCategory,
  selectedGender,
  selectedType,
}) => {
  const categories = useSelector(selectNoticeCategories);
  const genders = useSelector(selectNoticeSexes);
  const types = useSelector(selectNoticeSpecies);

  const categoryOptions: CategoryOption[] = [
    { value: 'Show all', label: 'Show all' },
    ...categories.map(category => ({ value: category, label: category })),
  ];

  const genderOptions: CategoryOption[] = [
    { value: 'Show all', label: 'Show all' },
    ...genders.map(gender => ({ value: gender, label: gender })),
  ];

  const typeOptions: CategoryOption[] = [
    { value: 'Show all', label: 'Show all' },
    ...types.map(type => ({ value: type, label: type })),
  ];

  return (
    <FiltersContainer>
      <FilterRow>
        <SelectCategory
          options={categoryOptions}
          placeholder="Category"
          value={
            selectedCategory === 'Show all'
              ? null
              : categoryOptions.find(
                  option => option.value === selectedCategory
                )
          }
          onChange={selectedOption =>
            handleFilterChange(
              'category',
              selectedOption ? selectedOption.value : 'Show all'
            )
          }
        />

        <SelectGender
          options={genderOptions}
          placeholder="By gender"
          value={
            selectedGender === 'Show all'
              ? null
              : genderOptions.find(option => option.value === selectedGender)
          }
          onChange={selectedOption =>
            handleFilterChange(
              'gender',
              selectedOption ? selectedOption.value : 'Show all'
            )
          }
        />
        <SelectType
          options={typeOptions}
          placeholder="By type"
          value={
            selectedType === 'Show all'
              ? null
              : typeOptions.find(option => option.value === selectedType)
          }
          onChange={selectedOption =>
            handleFilterChange(
              'type',
              selectedOption ? selectedOption.value : 'Show all'
            )
          }
        />
      </FilterRow>
      <RadioGroup>
        <ResetButton onClick={onReset}>Reset</ResetButton>
      </RadioGroup>
    </FiltersContainer>
  );
};

/********** */
// onChange={selectedOption =>
//   handleFilterChange('category', selectedOption?.value ?? 'Show all')
// }
// value={
//   categoryOptions.find(option => option.value === selectedCategory) ||
//   categoryOptions[0]
// }
// handleFilterChange: (field: keyof Filters, value: string | null) => void;
// selectedCategory: string | null;
// selectedGender: string | null;
// selectedType: string | null;
{
  /* {['popular', 'unpopular', 'cheap', 'expensive'].map(sortType => (
          <RadioButtonLabel
            key={sortType}
            $isActive={filters.sort === sortType}
          >
            <RadioButtonInput
              type="radio"
              name="sort"
              value={sortType}
              checked={filters.sort === sortType}
              onChange={() => onSimpleFilterChange('sort', sortType)}
            />
            {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
            {filters.sort === sortType && (
              <ClearButtonRatio
                type="button"
                $isActive={true}
                onClick={() => onSimpleFilterChange('sort', '')}
              >
                <IconCloseRatio width={16} height={16} iconName="close" />
              </ClearButtonRatio>
            )}
          </RadioButtonLabel>
        ))} */
}
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
//       <RadioGroup>
//         {['popular', 'unpopular', 'cheap', 'expensive'].map(sortType => (
//           <RadioButtonLabel
//             key={sortType}
//             $isActive={filters.sort === sortType}
//           >
//             <RadioButtonInput
//               type="radio"
//               name="sort"
//               value={sortType}
//               checked={filters.sort === sortType}
//               onChange={() => onFilterChange('sort', sortType)}
//             />
//             {sortType.charAt(0).toUpperCase() + sortType.slice(1)}
//             <ClearButtonRatio
//               type="button"
//               $isActive={filters.sort === sortType}
//               onClick={() => onFilterChange('sort', null)}
//             >
//               <IconCloseRatio width={16} height={16} iconName="close" />
//             </ClearButtonRatio>
//           </RadioButtonLabel>
//         ))}
//         <ResetButton onClick={onReset}>Reset</ResetButton>
//       </RadioGroup>
//     </FiltersContainer>
//   );
// };

/******************************************************* */
