import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchCitiesApi,
  fetchCityLocationsApi,
} from '../../services/citiesApi';
import { City } from '../../App.types';

// Get Ukrainian cities
export const fetchCities = createAsyncThunk<
  City[],
  string,
  { rejectValue: string }
>('cities/fetchCities', async (keyword, thunkAPI) => {
  try {
    return await fetchCitiesApi(keyword);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

// Get all cities where are pets that descripted on notes
export const fetchCityLocations = createAsyncThunk<
  City[],
  void,
  { rejectValue: string }
>('cities/fetchCityLocations', async (_, thunkAPI) => {
  try {
    return await fetchCityLocationsApi();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});
