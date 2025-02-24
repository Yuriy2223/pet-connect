export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  token: string;
  pets: PetProfile[];
  noticesViewed: Notice[];
  noticesFavorites: Notice[];
}

export interface PetProfile {
  _id: string;
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
  createdAt: string;
  updatedAt: string;
}

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
  location: string;
  imgURL: string;
  user: string;
  popularity: number;
  updatedAt: string;
}

export interface GetNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
export interface NoticesState {
  notices: Notice[];
  categories: string[];
  species: string[];
  sex: string[];
  favorites: Notice[];
  views: Notice[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}
