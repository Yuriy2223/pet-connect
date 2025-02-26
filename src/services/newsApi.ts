import { GetNewsResponse } from '../App.types';
import { instance } from './Api';

export const fetchNewsApi = async (
  page: number,
  keyword: string,
  perPage: number
): Promise<GetNewsResponse> => {
  const response = await instance.get<GetNewsResponse>('/api/news/', {
    params: { page, keyword, perPage },
  });
  return response.data;
};
