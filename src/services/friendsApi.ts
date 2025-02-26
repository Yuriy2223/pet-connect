import { Friend } from '../App.types';
import { instance } from './Api';

export const fetchFriendsApi = async (): Promise<Friend[]> => {
  const response = await instance.get<Friend[]>('/api/friends');
  return response.data;
};
