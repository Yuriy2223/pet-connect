import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// одна новина
export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
}

//  відповідь з сервера
export interface GetNewsResponse {
  page: number; // Поточна сторінка
  perPage: number; // Ліміт новин на сторінку
  totalPages: number; // Загальна кількість сторінок
  results: News[]; // Новини для поточної сторінки
}

// локального стану Redux
export interface NewsState {
  newsList: News[]; // Список новин
  searchQuery: string; // Запит для пошуку
  currentPage: number; // Поточна сторінка
  perPage: number; // Ліміт новин на сторінку
  totalPages: number; // Загальна кількість сторінок
}

const initialState: NewsState = {
  newsList: [],
  searchQuery: '',
  currentPage: 1,
  perPage: 6, // ліміт новин на сторінку
  totalPages: 0,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // Оновлення списку новин
    setNewsList: (state, action: PayloadAction<News[]>) => {
      state.newsList = action.payload;
    },
    // Оновлення запиту для пошуку
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    // Оновлення поточної сторінки
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // Оновлення ліміту новин на сторінку
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
    // Оновлення загальної кількості сторінок
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    // Оновлення всіх даних із сервера
    setNewsData: (state, action: PayloadAction<GetNewsResponse>) => {
      const { page, perPage, totalPages, results } = action.payload;
      state.currentPage = page;
      state.perPage = perPage;
      state.totalPages = totalPages;
      state.newsList = results;
    },
  },
});

export const {
  setNewsList,
  setSearchQuery,
  setCurrentPage,
  setPerPage,
  setTotalPages,
  setNewsData,
} = newsSlice.actions;

export default newsSlice.reducer;
