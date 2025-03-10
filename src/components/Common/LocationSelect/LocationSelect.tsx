// import React, { useCallback } from 'react';
// import AsyncSelect from 'react-select/async';
// import { useTheme } from 'styled-components';
// import { StylesConfig } from 'react-select';
// import { fetchCityLocations } from '../../../redux/cities/operations';
// import { useAppDispatch } from '../../../redux/store';
// import { City } from '../../../App.types';

// import {
//   ButtonClose,
//   IconClose,
//   SearchContainer,
// } from './LocationSelect.styled';

// interface OptionType {
//   value: string;
//   label: string;
//   cityData: City;
// }

// interface LocationSelectProps {
//   value: City | null;
//   onChange: (value: City | null) => void;
// }

// export const LocationSelect: React.FC<LocationSelectProps> = ({
//   value,
//   onChange,
// }) => {
//   const dispatch = useAppDispatch();
//   const theme = useTheme();

//   const loadOptions = useCallback(
//     async (inputValue: string) => {
//       if (!inputValue.trim()) return [];
//       const cities = await dispatch(fetchCityLocations(inputValue)).unwrap();
//       return cities.map((city: City) => ({
//         value: city._id,
//         label: `${city.cityEn}, ${city.countyEn}`,
//         cityData: city,
//       }));
//     },
//     [dispatch]
//   );

//   const handleChange = (selected: OptionType | null) => {
//     onChange(selected ? selected.cityData : null);
//   };

//   const clearInput = () => {
//     onChange(null);
//   };

//   const customStyles: StylesConfig<OptionType, false> = {
//     control: base => ({
//       ...base,
//       borderRadius: '30px',
//       fontSize: '14px',
//       border: `1px solid ${theme.opacity}`,
//       padding: '4px 6px',
//     }),
//   };

//   return (
//     <SearchContainer>
//       <ButtonClose type="button" onClick={clearInput}>
//         <IconClose width={18} height={18} iconName="close" />
//       </ButtonClose>
//       <AsyncSelect
//         cacheOptions
//         loadOptions={loadOptions}
//         defaultOptions
//         value={
//           value
//             ? {
//                 value: value._id,
//                 label: `${value.cityEn}, ${value.countyEn}`,
//                 cityData: value,
//               }
//             : null
//         }
//         onChange={handleChange}
//         styles={customStyles}
//         placeholder="Location"
//       />
//     </SearchContainer>
//   );
// };

/****************************стартова********************************* */
// interface LocationSelectProps {
//   value: string | null;
//   onChange: (value: string | null) => void;
// }

// export const LocationSelect: React.FC<LocationSelectProps> = ({
//   value,
//   onChange,
// }) => {
//   const theme = useTheme();
//   const [inputValue, setInputValue] = useState<string>('');
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   const clearInput = () => {
//     setInputValue('');
//     setSearchQuery('');
//   };

//   const searchInput = () => {
//     setSearchQuery(inputValue);
//   };

//   const customStyles: StylesConfig<false> = {
//     control: (provided, { isFocused }) => ({
//       ...provided,
//       borderRadius: '30px',
//       fontWeight: 500,
//       fontSize: window.innerWidth >= 768 ? '16px' : '14px',
//       lineHeight: 1.29,
//       letterSpacing: '-0.03em',
//       border: `1px solid ${isFocused ? theme.primaryDark : theme.opacity}`,
//       paddingLeft: '6px',
//       paddingRight: '50px',
//       paddingTop: window.innerWidth >= 768 ? '6px' : '4px',
//       paddingBottom: window.innerWidth >= 768 ? '6px' : '4px',
//       backgroundColor: theme.white,
//       color: isFocused ? theme.primaryDark : theme.opacity,
//       outline: 'none',
//       boxShadow: 'none',
//       transition: 'all 300ms ease',
//       cursor: 'pointer',
//       '&:hover': {
//         borderColor: theme.primaryDark,
//         color: theme.primaryDark,
//       },
//       width: 'auto',
//     }),
//     menu: base => ({
//       ...base,
//       borderRadius: '15px',
//       overflow: 'hidden',
//       marginTop: '1px',
//       width: 'auto',
//       minWidth: '100%',
//     }),
//     option: (base, { isSelected }) => ({
//       ...base,
//       borderRadius: '15px',
//       backgroundColor: theme.white,
//       color: isSelected ? theme.primaryDark : theme.black,
//       padding: '4px 6px',
//       transition: 'all 300ms ease',
//       cursor: 'pointer',
//       fontSize: '14px',
//       fontWeight: 500,
//       lineHeight: 1.29,
//       '&:hover': {
//         borderColor: theme.primaryDark,
//         color: theme.primaryDark,
//       },
//     }),
//     dropdownIndicator: () => ({
//       display: 'none',
//     }),
//     indicatorSeparator: () => ({
//       display: 'none',
//     }),
//   };

//   return (
//     <SearchContainer>
//       <ButtonClose type="button" onClick={clearInput}>
//         <IconClose width={18} height={18} iconName="close" />
//       </ButtonClose>
//       <ButtonSearch type="button" onClick={searchInput}>
//         <IconsSearch width={18} height={18} iconName="search" />
//       </ButtonSearch>
//       <AsyncSelect
//         loadOptions={() => fetchCityLocations()}
//         onChange={selected => onChange(selected?.value ?? null)}
//         defaultOptions
//         styles={customStyles}
//         value={null}
//         inputValue={inputValue}
//         onInputChange={(newValue: string) => setInputValue(newValue)}
//         placeholder="Location"
//         isClearable={false}
//       />
//     </SearchContainer>
//   );
// };
