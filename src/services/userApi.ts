import { instance } from './Api';
import { PetUProfile, UserProfile } from '../redux/user/types';

// Get current user info
export const fetchUserCurrentApi = async (): Promise<UserProfile> => {
  const response = await instance.get<UserProfile>('/api/user/profile');
  return response.data;
};

// Get full user info
export const fetchUserFullInfoApi = async (): Promise<UserProfile> => {
  const response = await instance.get<UserProfile>('/api/user/profile/full');
  return response.data;
};

// Update user profile
export const updateUserProfileApi = async (
  userData: Partial<UserProfile>
): Promise<UserProfile> => {
  const response = await instance.patch<UserProfile>(
    '/api/user/profile',
    userData
  );
  return response.data;
};

// Add pet
export const addUserPetApi = async (
  petData: Partial<PetUProfile>
): Promise<PetUProfile> => {
  const response = await instance.post<PetUProfile>(
    '/api/users/current/pets',
    petData
  );
  return response.data;
};

// Remove pet
export const removeUserPetApi = async (petId: string): Promise<void> => {
  await instance.delete(`/api/users/current/pets/${petId}`);
};
