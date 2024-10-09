import { AppDispatch } from '../store';
import { setNewsList, setCurrentPage } from './newsSlice';

export const fetchNews = (page: number = 1, searchQuery: string = '') => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`/api/news?page=${page}&query=${searchQuery}`);
    const data = await response.json();

    if (response.ok) {
      dispatch(setNewsList(data.news));
      dispatch(setCurrentPage(page));
    } else {
      console.error('Error fetching news:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};
