import { PetProfile, UserProfile } from '../App.types';
import { instance } from './Api';

// Get current user info
export const fetchUserCurrentApi = async (): Promise<UserProfile> => {
  const response = await instance.get<UserProfile>('/api/users/current');
  return response.data;
};

// Get full user info
export const fetchUserFullInfoApi = async (): Promise<UserProfile> => {
  const response = await instance.get<UserProfile>('/api/users/current/full');
  return response.data;
};

// Update user profile
export const updateUserProfileApi = async (
  userData: Partial<UserProfile>
): Promise<UserProfile> => {
  const response = await instance.patch<UserProfile>(
    '/api/users/current/edit',
    userData
  );
  return response.data;
};

// Add pet
export const addUserPetApi = async (
  petData: Partial<PetProfile>
): Promise<PetProfile> => {
  const response = await instance.post<PetProfile>(
    '/api/users/current/pets/add',
    petData
  );
  return response.data;
};

// Remove pet
export const removeUserPetApi = async (petId: string): Promise<void> => {
  await instance.delete(`/api/users/current/pets/remove/${petId}`);
};
