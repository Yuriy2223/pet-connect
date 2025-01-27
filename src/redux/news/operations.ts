import axios from 'axios';
import { AppDispatch } from '../store';
import {
  setNewsList,
  setPerPage,
  setTotalPages,
  setCurrentPage,
} from './slice';
import { toast } from 'react-toastify';

interface GetNewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: {
    _id: string;
    imgUrl: string;
    title: string;
    text: string;
    date: string;
    url: string;
  }[];
}

export const fetchNews =
  (page: number = 1, keyword: string = '', perPage: number = 6) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<GetNewsResponse>('/api/news/', {
        params: {
          page,
          keyword,
          perPage,
        },
      });

      if (response.status === 200) {
        const { results, totalPages, page, perPage } = response.data;

        dispatch(setNewsList(results));
        dispatch(setCurrentPage(page));
        dispatch(setPerPage(perPage));
        dispatch(setTotalPages(totalPages));
      } else {
        console.error('Unexpected response status:', response.status);
        toast.error('Failed to fetch news. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      toast.error('Something went wrong while loading news.');
    }
  };
