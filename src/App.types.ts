export interface UserAuth {
  _id: string;
  name: string;
  email: string;
  token: string;
}
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
export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
}
export interface GetNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}
export interface GetNewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}
export interface WorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}
export interface Friend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: WorkDay[];
  phone: string;
  email: string;
}
export interface City {
  _id: string;
  useCounty: string;
  stateEn: string;
  cityEn: string;
  countyEn: string;
}
