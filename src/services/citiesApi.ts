import { instance } from './Api';
import { City } from '../redux/cities/cities.types';

// Get Ukrainian cities
export const fetchCitiesApi = async (keyword: string): Promise<City[]> => {
  const response = await instance.get<City[]>(`/cities?keyword=${keyword}`);
  return response.data;
};

// Get all cities where are pets that descripted on notes
export const fetchCityLocationsApi = async (): Promise<City[]> => {
  const response = await instance.get<City[]>('/cities/locations');
  return response.data;
};
