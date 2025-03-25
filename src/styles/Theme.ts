import { DefaultTheme } from 'styled-components';

// Типи тем
export type ThemeType = 'light' | 'dark' | 'sky' | 'rose' | 'peach';

// Світла тема
export const lightTheme: DefaultTheme = {
  primaryDark: 'var(--golden)',
  primaryLight: 'var(--golden-light)',
  lightYellow: 'var(--light-yellow)',

  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteTr: 'var(--white-tr)',
  whiteOpacity: 'var(--white-opacity)',
  opacityTr: 'var(--ligh-gray-tr)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  redLight: 'var(--light-red)',
  star: 'var(--yellow)',
  black: 'var(--dark-gray)',
  blue: 'var(--bright-blue)',
  blueLight: 'var(--light-blue)',
  body: 'var(--background-body)',
};

// Темна тема
export const darkTheme: DefaultTheme = {
  primaryDark: 'var(--soft-teal)',
  primaryLight: 'var( --mint-green)',

  lightYellow: 'var(--light-yellow)',

  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteTr: 'var(--white-tr)',
  whiteOpacity: 'var(--white-opacity)',
  opacityTr: 'var(--ligh-gray-tr)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  redLight: 'var(--light-red)',
  star: 'var(--yellow)',
  black: 'var(--dark-gray)',
  blue: 'var(--bright-blue)',
  blueLight: 'var(--light-blue)',
  body: 'var(--background-body)',
};

// Небесна тема
export const skyTheme: DefaultTheme = {
  primaryDark: 'var( --powder-blue)',
  primaryLight: 'var( --sky-blue)',

  lightYellow: 'var(--light-yellow)',

  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteTr: 'var(--white-tr)',
  whiteOpacity: 'var(--white-opacity)',
  opacityTr: 'var(--ligh-gray-tr)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  redLight: 'var(--light-red)',
  star: 'var(--yellow)',
  black: 'var(--dark-gray)',
  blue: 'var(--bright-blue)',
  blueLight: 'var(--light-blue)',
  body: 'var(--background-body)',
};

// Рожева тема
export const roseTheme: DefaultTheme = {
  primaryDark: 'var(--peach)',
  primaryLight: 'var(--soft-rose)',

  lightYellow: 'var(--light-yellow)',

  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteTr: 'var(--white-tr)',
  whiteOpacity: 'var(--white-opacity)',
  opacityTr: 'var(--ligh-gray-tr)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  redLight: 'var(--light-red)',
  star: 'var(--yellow)',
  black: 'var(--dark-gray)',
  blue: 'var(--bright-blue)',
  blueLight: 'var(--light-blue)',
  body: 'var(--background-body)',
};

// Персикова тема
export const peachTheme: DefaultTheme = {
  primaryDark: 'var(--coral)',
  primaryLight: 'var(--blush-pink)',

  lightYellow: 'var(--light-yellow)',

  opacity: 'var(--ligh-gray-opacity)',
  white: 'var(--white-color)',
  whiteTr: 'var(--white-tr)',
  whiteOpacity: 'var(--white-opacity)',
  opacityTr: 'var(--ligh-gray-tr)',
  green: 'var(--bright-green)',
  red: 'var(--bright-red)',
  redLight: 'var(--light-red)',
  star: 'var(--yellow)',
  black: 'var(--dark-gray)',
  blue: 'var(--bright-blue)',
  blueLight: 'var(--light-blue)',
  body: 'var(--background-body)',
};

// Об'єкт усіх тем
export const themes: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
  sky: skyTheme,
  rose: roseTheme,
  peach: peachTheme,
};
