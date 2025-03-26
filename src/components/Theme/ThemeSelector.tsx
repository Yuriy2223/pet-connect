import { useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/slice';
import { selectTheme } from '../../redux/theme/selectors';
import { themes, ThemeType } from '../../styles/Theme';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/store';

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 119px;
  height: 42px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryDark};
  border: 1px solid ${({ theme }) => theme.white};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};
    border: 1px solid ${({ theme }) => theme.lightYellow};
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.25;
    border: 1px solid ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};

    &:hover,
    &.active {
      border: 1px solid ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

export const ThemeSelector = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const handleThemeChange = () => {
    const themeKeys = Object.keys(themes) as ThemeType[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextTheme = themeKeys[(currentIndex + 1) % themeKeys.length];
    dispatch(setTheme(nextTheme));
  };

  return <ThemeButton onClick={handleThemeChange}>Theme</ThemeButton>;
};
