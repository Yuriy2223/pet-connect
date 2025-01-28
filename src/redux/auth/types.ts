export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isSignedIn: boolean;
  loading: boolean;
  error: string | null;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterResponse {
  user: { id: string; name: string; email: string };
  token: string;
}

export interface LoginResponse {
  user: { id: string; name: string; email: string };
  token: string;
}
export interface GetNewsResponse {
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
