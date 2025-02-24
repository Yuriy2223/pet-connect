export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
}

export interface GetNewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}

export interface NewsState {
  newsList: News[];
  searchQuery: string;
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}
