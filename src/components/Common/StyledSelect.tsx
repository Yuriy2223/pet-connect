// import styled from 'styled-components';
// import Select, { Props as SelectProps, CSSObjectWithLabel } from 'react-select';

// interface DynamicSelectProps extends SelectProps {
//   width?: string | number;
// }

// export const StyledSelect = styled(Select).attrs<DynamicSelectProps>(props => ({
//   styles: {
//     control: (
//       base: CSSObjectWithLabel,
//       state: { isFocused: boolean }
//     ): CSSObjectWithLabel => ({
//       ...base, // Підключення базових стилів
//       borderRadius: '30px', // Динамічне закруглення кутів контейнера
//       fontWeight: 500,
//       fontSize: window.innerWidth >= 768 ? '16px' : '14px',
//       lineHeight: window.innerWidth >= 768 ? 1.25 : 1.29,
//       paddingTop: window.innerWidth >= 768 ? '5px' : '4px',
//       paddingBottom: window.innerWidth >= 768 ? '5px' : '4px',
//       letterSpacing: '-0.03em',
//       border: `1px solid ${
//         state.isFocused ? props.theme.primaryDark : props.theme.opacity
//       }`,
//       backgroundColor: props.theme.white,
//       color: state.isFocused ? props.theme.primaryDark : props.theme.opacity, // Колір тексту: темний при фокусі, інший в інших випадках
//       outline: 'none',
//       boxShadow: 'none',
//       transition: 'all 300ms ease',
//       cursor: 'pointer',
//       '&:hover': {
//         borderColor: props.theme.primaryDark,
//         color: props.theme.primaryDark,
//       },
//       width: 'auto',
//     }),
//     menu: (base: CSSObjectWithLabel): CSSObjectWithLabel => ({
//       ...base, // Підключення базових стилів
//       borderRadius: '15px',
//       overflow: 'hidden', // Прибирає можливість появи скролу
//       marginTop: '1px', // Відстань між контролем і меню
//       width: 'auto',
//       minWidth: '100%',
//       zIndex: `2`,
//     }),
//     option: (
//       base: CSSObjectWithLabel,
//       { isSelected }: { isFocused: boolean; isSelected: boolean }
//     ): CSSObjectWithLabel => ({
//       ...base, // Підключення базових стилів
//       borderRadius: '15px', // Закруглення кутів для кожної опції
//       backgroundColor: props.theme.white, // Колір фону для кожної опції
//       color: isSelected ? props.theme.primaryDark : props.theme.black,
//       padding: '4px 6px', // Внутрішні відступи для опції
//       transition: 'all 300ms ease',
//       cursor: 'pointer',
//       fontSize: '14px', //  розмір шрифту для опцій
//       fontWeight: 500, //  товщина шрифту для опцій
//       lineHeight: 1.29, //  висота рядка для опцій
//       '&:hover': {
//         borderColor: props.theme.primaryDark, // Колір бордера при наведенні
//         color: props.theme.primaryDark, // Колір тексту при наведенні
//       },
//     }),
//     indicatorSeparator: () => ({
//       display: 'none', // Прибирає риску між текстом і іконкою
//     }),
//   },
// }))<DynamicSelectProps>``;
import styled from 'styled-components';
import Select, {
  Props as SelectProps,
  CSSObjectWithLabel,
  GroupBase,
} from 'react-select';

// Задаємо чіткий тип для опцій
type StringSelectProps = SelectProps<string, false, GroupBase<string>> & {
  width?: string | number;
};

export const StyledSelect = styled(
  Select<string, false, GroupBase<string>>
).attrs<StringSelectProps>(props => ({
  // Важливо — тут вже типи правильні
  getOptionLabel: (option: string) => option,
  getOptionValue: (option: string) => option,

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
