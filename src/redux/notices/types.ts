export interface Notice {
  _id: string;
  species: string;
  category: string;
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
  loading: boolean;
  error: string | null;
}
