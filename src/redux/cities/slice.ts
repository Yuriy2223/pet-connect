import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCities, fetchCityLocations } from './operations';
import { City } from '../../App.types';

export interface CitiesState {
  cities: City[];
  locations: City[];
  loading: boolean;
  error: string | null;
}
const initialState: CitiesState = {
  cities: [],
  locations: [],
  loading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Get Ukrainian cities
      .addCase(fetchCities.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCities.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.loading = false;
          state.error = null;
          state.cities = action.payload;
        }
      )
      .addCase(
        fetchCities.rejected,
        // (state, action: PayloadAction<string | undefined>) => {
        (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error occurred';
        }
      )

      // Get all cities where are pets that descripted on notes
      .addCase(fetchCityLocations.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCityLocations.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.loading = false;
          state.error = null;
          state.locations = action.payload;
        }
      )
      .addCase(
        fetchCityLocations.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error occurred';
        }
      );
  },
});

export const citiesReducer = citiesSlice.reducer;
