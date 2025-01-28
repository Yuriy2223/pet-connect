import { GetUserProfileResponse, Pet } from '../redux/user/types';
import { instance } from './Api';

// Get current user info
export const fetchUserCurrentApi =
  async (): Promise<GetUserProfileResponse> => {
    const response = await instance.get<>(
      '/api/user/profile'
    );
    return response.data;
  };

//  Get current user full info
export const fetchUserFullInfoApi = async (): Promise<> => {
  const response = await instance.get<>('/api/user/profile');
  return response.data;
};

// User edit
export const updateUserProfileApi = async (): Promise<> => {
  const response = await instance.patch<>('/api/user/profile');
  return response.data;
};

// Add Pet
export const addUserPetApi = async (petData: Partial<Pet>): Promise<Pet> => {
  const response = await instance.post<Pet>(
    '/api/users/current/pets/add',
    petData
  );
  return response.data;
};

// Remove Pet
export const removeUserPetApi = async (petId: string): Promise<void> => {
  await instance.delete(`/api/users/current/pets/remove/${petId}`);
};
