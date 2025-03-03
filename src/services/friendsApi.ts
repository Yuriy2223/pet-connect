import { Friend } from '../App.types';
import { publicInstance } from './Api';

export const fetchFriendsApi = async (): Promise<Friend[]> => {
  const response = await publicInstance.get<Friend[]>('/api/friends');
  return response.data;
};
