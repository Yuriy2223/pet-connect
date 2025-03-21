import React, { useState, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import { useTheme } from 'styled-components';
import { fetchCityLocations } from '../../../redux/cities/operations';
import { useAppDispatch } from '../../../redux/store';
import { City } from '../../../App.types';
import {
  ButtonClose,
  IconClose,
  IconsSearch,
  SearchContainer,
  getCustomStyles,
} from './LocationSelect.styled';

interface CityOption {
  value: string;
  label: string;
  cityData: City;
}

interface LocationSelectProps {
  value: City | null;
  onChange: (value: City | null) => void;
}

export const LocationSelect: React.FC<LocationSelectProps> = ({
  value,
  onChange,
}) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');

  const loadOptions = useCallback(async () => {
    try {
      const cities: City[] = await dispatch(fetchCityLocations()).unwrap();
      return cities.map(city => ({
        value: city._id,
        label: `${city.cityEn}, ${city.countyEn}`,
        cityData: city,
      }));
    } catch (error) {
      console.error('Failed to fetch city locations:', error);
      return [];
    }
  }, [dispatch]);

  const clearInput = () => {
    setInputValue('');
    onChange(null);
  };

  return (
    <SearchContainer>
      {inputValue || value ? (
        <ButtonClose type="button" onClick={clearInput}>
          <IconClose width={18} height={18} iconName="close" />
        </ButtonClose>
      ) : null}
      <IconsSearch width={18} height={18} iconName="search" />
      <AsyncSelect<CityOption>
        loadOptions={loadOptions}
        onChange={selected => onChange(selected ? selected.cityData : null)}
        defaultOptions
        styles={getCustomStyles(theme)}
        value={
          value
            ? {
                value: value._id,
                label: `${value.cityEn}, ${value.countyEn}`,
                cityData: value,
              }
            : null
        }
        inputValue={inputValue}
        onInputChange={setInputValue}
        placeholder="Location"
        isClearable={false}
        components={{
          IndicatorsContainer: () => null,
        }}
      />
    </SearchContainer>
  );
};
