import { City } from '../App.types';
import { instance } from './Api';

// Get Ukrainian cities
export const fetchCitiesApi = async (keyword: string): Promise<City[]> => {
  const response = await instance.get<City[]>(`/api/cities?keyword=${keyword}`);
  return response.data;
};

// Get all cities where are pets that descripted on notes
export const fetchCityLocationsApi = async (): Promise<City[]> => {
  const response = await instance.get<City[]>('/api/cities/locations');
  return response.data;
};
