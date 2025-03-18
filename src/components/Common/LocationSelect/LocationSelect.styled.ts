import { StylesConfig, GroupBase } from 'react-select';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { Iconsvg } from '../../Common/Icons';
import { City } from '../../../App.types';

interface CityOption {
  value: string;
  label: string;
  cityData: City;
}

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 335px;
  height: 42px;

  @media (min-width: 768px) {
    width: 227px;
    height: 48px;
  }

  & > div {
    width: 100%;
    height: 100%;
  }
`;
export const IconsSearch = styled(Iconsvg)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-46%);
  background: none;
  border: none;
  padding: 0;
  z-index: 1;
  stroke: ${({ theme }) => theme.opacityTr};

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
  transform: translateY(-37%);
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

export const getCustomStyles = (
  theme: DefaultTheme
): StylesConfig<CityOption, false, GroupBase<CityOption>> => ({
  control: (provided, { isFocused }) => ({
    ...provided,
    height: '100%',
    width: '100%',
    borderRadius: '30px',
    fontWeight: 500,
    fontSize: window.innerWidth >= 768 ? '16px' : '14px',
    border: `1px solid ${isFocused ? theme.primaryDark : theme.opacity}`,
    paddingLeft: '6px',
    paddingRight: '50px',
    backgroundColor: theme.white,
    transition: 'all 300ms ease',
    '&:hover': {
      borderColor: theme.primaryDark,
    },
    boxShadow: 'none',
    borderRight: 'none',
  }),
  menu: base => ({
    ...base,
    borderRadius: '15px',
    marginTop: '1px',
  }),
  option: (base, { isSelected }) => ({
    ...base,
    backgroundColor: theme.white,
    color: isSelected ? theme.primaryDark : theme.black,
    cursor: 'pointer',
    '&:hover': {
      borderColor: theme.primaryDark,
    },
  }),
});
