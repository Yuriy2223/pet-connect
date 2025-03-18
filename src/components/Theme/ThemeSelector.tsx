import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/slice';
import { selectTheme } from '../../redux/theme/selectors';
import { themes, ThemeType } from '../../styles/Theme';
import styled from 'styled-components';
import { AppDispatch } from '../../redux/store';

export const ThemeButton = styled.button`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    width: 119px;
    height: 48px;
    white-space: nowrap;
    font-weight: 500;

    border: 1px solid ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.lightYellow};

    font-size: 16px;
    line-height: 1.25;

    &:hover,
    &.active {
      border: 1px solid ${({ theme }) => theme.primaryDark};
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

export const ThemeSelector = () => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  const handleThemeChange = () => {
    const themeKeys = Object.keys(themes) as ThemeType[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextTheme = themeKeys[(currentIndex + 1) % themeKeys.length];
    dispatch(setTheme(nextTheme));
  };

  return (
    <ThemeButton onClick={handleThemeChange}>
      Theme
      {/* : {themes[theme] ? themes[theme].primaryDark : 'Default'} */}
    </ThemeButton>
  );
};
