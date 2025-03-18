import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeType } from '../../redux/theme/slice';
import { selectTheme } from '../../redux/theme/selectors';

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <select
      value={theme}
      onChange={e => dispatch(setTheme(e.target.value as ThemeType))}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="purple">Purple</option>
    </select>
  );
};
