import styled from 'styled-components';
import Select, {
  Props as SelectProps,
  CSSObjectWithLabel,
  GroupBase,
} from 'react-select';

interface CategoryOption {
  value: string;
  label: string;
}

type StringSelectProps = SelectProps<
  CategoryOption,
  false,
  GroupBase<CategoryOption>
> & {
  width?: string | number;
};

export const StyledSelect = styled(
  Select<CategoryOption, false, GroupBase<CategoryOption>>
).attrs<StringSelectProps>(props => ({
  getOptionLabel: (option: CategoryOption) => option.label,
  getOptionValue: (option: CategoryOption) => option.value,

  styles: {
    control: (
      base: CSSObjectWithLabel,
      state: { isFocused: boolean }
    ): CSSObjectWithLabel => ({
      ...base,
      borderRadius: '30px',
      fontWeight: 500,
      fontSize: window.innerWidth >= 768 ? '16px' : '14px',
      lineHeight: window.innerWidth >= 768 ? 1.25 : 1.29,
      paddingTop: window.innerWidth >= 768 ? '5px' : '4px',
      paddingBottom: window.innerWidth >= 768 ? '5px' : '4px',
      letterSpacing: '-0.03em',
      border: `1px solid ${
        state.isFocused ? props.theme.primaryDark : props.theme.opacity
      }`,
      backgroundColor: props.theme.white,
      color: state.isFocused ? props.theme.primaryDark : props.theme.opacity,
      outline: 'none',
      boxShadow: 'none',
      transition: 'all 300ms ease',
      cursor: 'pointer',
      '&:hover': {
        borderColor: props.theme.primaryDark,
        color: props.theme.primaryDark,
      },
      width: 'auto',
    }),
    menu: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...base,
      borderRadius: '15px',
      overflow: 'hidden',
      marginTop: '1px',
      width: 'auto',
      minWidth: '100%',
      zIndex: `2`,
    }),
    option: (
      base: CSSObjectWithLabel,
      { isSelected }: { isFocused: boolean; isSelected: boolean }
    ): CSSObjectWithLabel => ({
      ...base,
      borderRadius: '15px',
      backgroundColor: props.theme.white,
      color: isSelected ? props.theme.primaryDark : props.theme.black,
      padding: '4px 6px',
      transition: 'all 300ms ease',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.29,
      '&:hover': {
        borderColor: props.theme.primaryDark,
        color: props.theme.primaryDark,
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  },
}))<StringSelectProps>``;
