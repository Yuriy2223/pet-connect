import axios from 'axios';
import { AppDispatch } from '../store';
import { setNewsList, setCurrentPage, setTotalPages } from './slice';

export const fetchNews =
  (page: number = 1, keyword: string = '', limit: number = 6) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get('/news', {
        params: {
          page,
          keyword,
          limit,
        },
      });

      if (response.status === 200) {
        const { results, totalPages } = response.data;

        dispatch(setNewsList(results));
        dispatch(setCurrentPage(page));
        dispatch(setTotalPages(totalPages));
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
