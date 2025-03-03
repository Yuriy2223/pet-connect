import { GetNewsResponse } from '../App.types';
import { publicInstance } from './Api';

export const fetchNewsApi = async (
  page: number,
  keyword: string,
  perPage: number
): Promise<GetNewsResponse> => {
  const response = await publicInstance.get<GetNewsResponse>('/api/news/', {
    params: { page, keyword, perPage },
  });
  return response.data;
};
