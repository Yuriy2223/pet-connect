import { instance } from './Api';
import { Friend } from '../redux/friends/friends.types';

export const fetchFriendsApi = async (): Promise<Friend[]> => {
  const response = await instance.get<Friend[]>('/api/friends');
  return response.data;
};
