export interface Notice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string | { _id: string; stateEn: string; cityEn: string };
  imgURL: string;
  user: string | { _id: string; email: string; phone: string };
  popularity: number;
  // createdAt: string;
  // updatedAt: string;
}

export interface NoticesState {
  notices: Notice[];
  categories: string[];
  species: string[];
  sexes: string[];
  favorites: string[];
  views: string[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

export interface GetNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}
