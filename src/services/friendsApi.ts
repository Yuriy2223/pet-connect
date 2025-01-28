import axios from 'axios';
import { Friend } from '../redux/friends/slice';

export const fetchFriendsApi = async (): Promise<Friend[]> => {
  const response = await axios.get<Friend[]>('/api/friends');
  return response.data;
};
