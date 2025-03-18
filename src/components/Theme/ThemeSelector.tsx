import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/slice';
import { selectTheme } from '../../redux/theme/selectors';
import { themes, ThemeType } from '../../styles/Theme';

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleThemeChange = () => {
    const themeKeys = Object.keys(themes) as ThemeType[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextTheme = themeKeys[(currentIndex + 1) % themeKeys.length];
    dispatch(setTheme(nextTheme));
  };

  return (
    <button onClick={handleThemeChange}>
      Change Theme
      {/* : {themes[theme] ? themes[theme].primaryDark : 'Default'} */}
    </button>
  );
};
