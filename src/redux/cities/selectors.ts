import { City } from '../../App.types';
import { RootState } from '../store';

export const selectCities = (state: RootState): City[] => state.cities.cities;

export const selectLocations = (state: RootState): City[] =>
  state.cities.locations;

export const selectCitiesLoading = (state: RootState): boolean =>
  state.cities.loading;

export const selectCitiesError = (state: RootState): string | null =>
  state.cities.error;
