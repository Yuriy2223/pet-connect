import { DefaultTheme } from 'styled-components';

// Визначаємо типи для теми
export type ThemeType = 'light' | 'dark' | 'sky' | 'rose' | 'peach';

// Світла тема
export const lightTheme: DefaultTheme = {
  primaryDark: 'var(--golden)',
  primaryLight: 'var(--golden-light)',
  black: 'var(--dark-gray)',
  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteOpacity: 'var(--white-opacity)',
  whiteTr: 'var(--white-tr)',
  lightYellow: 'var(--light-yellow)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  opacityTr: 'var(--ligh-gray-tr)',
  // body: 'var(--background-body)',
};
// Tемна тема
export const darkTheme: DefaultTheme = {
  primaryDark: 'var( --soft-teal)',
  primaryLight: 'var(--mint-green)',
  black: 'var(--dark-gray)',
  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteOpacity: 'var(--white-opacity)',
  lightYellow: 'var(--light-yellow)',
};
// Небесна тема
export const skyTheme: DefaultTheme = {
  primaryColorLight: 'var(--sky-blue)',
  primaryColorDark: 'var(--powder-blue)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
};
// Рожева тема
export const roseTheme: DefaultTheme = {
  primaryColorLight: 'var(--soft-rose)',
  primaryColorDark: 'var(--peach)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
};
// Персикова тема
export const peachTheme: DefaultTheme = {
  primaryColorLight: 'var(--blush-pink)',
  primaryColorDark: 'var( --coral)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
};
// Експорт об'єкту всіх тем
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  sky: skyTheme,
  rose: roseTheme,
  peach: peachTheme,
};