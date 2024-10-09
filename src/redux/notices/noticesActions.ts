import { AppDispatch } from '../store';
import { setNotices, addFavorite, removeFavorite } from './noticesSlice';

export const fetchNotices = (category: string, page: number = 1) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`/api/notices?category=${category}&page=${page}`);
    const data = await response.json();

    if (response.ok) {
      dispatch(setNotices(data.notices));
    } else {
      console.error('Error fetching notices:', data.message);
    }
  } catch (error) {
    console.error('Error fetching notices:', error);
  }
};

export const addToFavorites = (noticeId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`/api/notices/favorites/${noticeId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      dispatch(addFavorite(noticeId));
    } else {
      console.error('Error adding to favorites:', response.statusText);
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const removeFromFavorites = (noticeId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`/api/notices/favorites/${noticeId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      dispatch(removeFavorite(noticeId));
    } else {
      console.error('Error removing from favorites:', response.statusText);
    }
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};
