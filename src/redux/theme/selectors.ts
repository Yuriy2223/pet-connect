import { RootState } from '../store';
import { ThemeType } from './slice';

// export const selectTheme = (state: RootState) => state.theme;
// export const selectTheme = (state: RootState): ThemeType => state.theme;
export const selectTheme = (state: RootState): ThemeType => state.theme.theme;
