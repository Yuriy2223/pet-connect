import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface News {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface NewsState {
  newsList: News[];
  searchQuery: string;
  currentPage: number;
  totalPages: number;
}

const initialState: NewsState = {
  newsList: [],
  searchQuery: '',
  currentPage: 1,
  totalPages: 1,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsList: (state, action: PayloadAction<News[]>) => {
      state.newsList = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setNewsList, setSearchQuery, setCurrentPage } =
  newsSlice.actions;
export default newsSlice.reducer;
