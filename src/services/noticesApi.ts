import { instance } from './Api';
import { GetNoticesResponse, Notice } from '../redux/notices/notices.types';

// Get all notices
export const fetchNoticesApi = async (
  page: number,
  perPage: number
): Promise<GetNoticesResponse> => {
  const response = await instance.get<GetNoticesResponse>('/api/notices', {
    params: { page, perPage },
  });
  return response.data;
};

// Get notice categories
export const fetchNoticesCategoriesApi = async (): Promise<string[]> => {
  const response = await instance.get<string[]>('/api/notices/categories');
  return response.data;
};

// Get notice sexes
export const fetchNoticesSexesApi = async (): Promise<string[]> => {
  const response = await instance.get<string[]>('/api/notices/sex');
  return response.data;
};

// Get notice species
export const fetchNoticesSpeciesApi = async (): Promise<string[]> => {
  const response = await instance.get<string[]>('/api/notices/species');
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

// Get a notice by ID
export const fetchNoticesNoticeByIdApi = async (
  noticeId: string
): Promise<Notice> => {
  const response = await instance.get<Notice>(`/api/notices/${noticeId}`);
  return response.data;
};
