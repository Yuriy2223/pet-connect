import { GetUserProfileResponse, Pet } from '../redux/user/types';
import { instance } from './Api';

// Fetch User Profile
export const fetchUserProfileApi = async (): Promise<GetUserProfileResponse> => {
  const response = await instance.get<GetUserProfileResponse>('/api/user/profile');
  return response.data;
};

// Add Pet
export const addPetApi = async (petData: Partial<Pet>): Promise<Pet> => {
  const response = await instance.post<Pet>('/api/user/pets', petData);
  return response.data;
};

// Remove Pet
export const removePetApi = async (petId: string): Promise<void> => {
  await instance.delete(`/api/user/pets/${petId}`);
};
