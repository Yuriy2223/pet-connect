import { instance } from './Api';
import { UserProfile } from '../App.types';

// Get notice to favorites end views
export const fetchUserFullApi = async (): Promise<UserProfile> => {
  const response = await instance.get<UserProfile>('/api/users/current/full');
  return response.data;
};

// Add a notice to favorites
export const addNoticesFavoriteApi = async (
  noticeId: string
): Promise<string[]> => {
  const response = await instance.post<string[]>(
    `/api/notices/favorites/add/${noticeId}`
  );
  return response.data;
};

// Remove a notice from favorites
export const removeNoticesFavoriteApi = async (
  noticeId: string
): Promise<string[]> => {
  const response = await instance.delete<string[]>(
    `/api/notices/favorites/remove/${noticeId}`
  );
  return response.data;
};
