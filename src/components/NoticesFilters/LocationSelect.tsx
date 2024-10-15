import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';
import styled, { useTheme } from 'styled-components';
import { fetchLocations, OptionType } from '../../services/apiService';
import { Iconsvg } from '../Common/Icons';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 335px;

  @media (min-width: 768px) {
    width: 227px;
  }
`;
export const ButtonSearch = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  z-index: 1;
`;
export const IconsSearch = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.opacityTr};

  &:hover {
    stroke: ${({ theme }) => theme.primaryDark};
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ButtonClose = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 36px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  z-index: 1;
`;
export const IconClose = styled(Iconsvg)`
  stroke: ${({ theme }) => theme.opacityTr};

  &:hover {
    stroke: ${({ theme }) => theme.red};
  }

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const LocationSelect = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const clearInput = () => {
    setInputValue('');
    setSearchQuery('');
  };

  const searchInput = () => {
    setSearchQuery(inputValue);
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, { isFocused }) => ({
      ...provided,
      borderRadius: '30px',
      fontWeight: 500,
      fontSize: window.innerWidth >= 768 ? '16px' : '14px',
      lineHeight: 1.29,
      letterSpacing: '-0.03em',
      border: `1px solid ${isFocused ? theme.primaryDark : theme.opacity}`,
      paddingLeft: '6px',
      paddingRight: '50px',
      paddingTop: window.innerWidth >= 768 ? '6px' : '4px',
      paddingBottom: window.innerWidth >= 768 ? '6px' : '4px',
      backgroundColor: theme.white,
      color: isFocused ? theme.primaryDark : theme.opacity,
      outline: 'none',
      boxShadow: 'none',
      transition: 'all 300ms ease',
      cursor: 'pointer',
      '&:hover': {
        borderColor: theme.primaryDark,
        color: theme.primaryDark,
      },
      width: 'auto',
    }),
    menu: base => ({
      ...base,
      borderRadius: '15px',
      overflow: 'hidden',
      marginTop: '1px',
      width: 'auto',
      minWidth: '100%',
    }),
    option: (base, { isSelected }) => ({
      ...base,
      borderRadius: '15px',
      backgroundColor: theme.white,
      color: isSelected ? theme.primaryDark : theme.black,
      padding: '4px 6px',
      transition: 'all 300ms ease',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.29,
      '&:hover': {
        borderColor: theme.primaryDark,
        color: theme.primaryDark,
      },
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <SearchContainer>
      <ButtonClose type="button" onClick={clearInput}>
        <IconClose width={18} height={18} iconName="close" />
      </ButtonClose>
      <ButtonSearch type="button" onClick={searchInput}>
        <IconsSearch width={18} height={18} iconName="search" />
      </ButtonSearch>
      <AsyncSelect
        loadOptions={(inputValue, callback) =>
          fetchLocations(searchQuery, callback)
        }
        defaultOptions
        styles={customStyles}
        value={null}
        inputValue={inputValue}
        onInputChange={(newValue: string) => setInputValue(newValue)}
        placeholder="Location"
        isClearable={false}
      />
    </SearchContainer>
  );
};
