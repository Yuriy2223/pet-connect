import styled from 'styled-components';
import Select, { Props as SelectProps, CSSObjectWithLabel } from 'react-select';

interface DynamicSelectProps extends SelectProps {
  width?: string | number;
}

export const AddStyledSelect = styled(Select).attrs<DynamicSelectProps>(
  props => ({
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
        paddingTop: window.innerWidth >= 768 ? '4px' : '2px',
        paddingBottom: window.innerWidth >= 768 ? '4px' : '2px',
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
        height: window.innerWidth >= 768 ? '50px' : '40px',
      }),
      menu: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
        ...base, 
        borderRadius: '15px',
        marginTop: '2px', 
        minWidth: '100%',
        zIndex: `2`,
        maxHeight: window.innerWidth >= 768 ? '120px' : '85px',
        overflowY: 'auto',
      }),
      option: (
        base: CSSObjectWithLabel,
        { isSelected }: { isFocused: boolean; isSelected: boolean }
      ): CSSObjectWithLabel => ({
        ...base, 
        borderRadius: '15px', 
        backgroundColor: props.theme.white,
        color: isSelected ? props.theme.primaryDark : props.theme.black,
        padding: '4px', 
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
  })
)<DynamicSelectProps>``;
