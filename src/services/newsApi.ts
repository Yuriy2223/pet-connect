import { GetNewsResponse, NewsParams } from '../App.types';
import { publicInstance } from './Api';

export const fetchNewsApi = async (
  params: NewsParams
): Promise<GetNewsResponse> => {
  const response = await publicInstance.get<GetNewsResponse>('/api/news/', {
    params,
  });
  return response.data;
};
