import { UserAuth } from '../App.types';
import { instance } from './Api';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Сurrent User
export const currentUserApi = async (): Promise<UserAuth> => {
  const response = await instance.get<UserAuth>('/api/users/current');
  return response.data;
};

// Register User
export const registerUserApi = async (
  data: RegisterData
): Promise<UserAuth> => {
  const response = await instance.post<UserAuth>('/api/users/signup', data);
  return response.data;
};

// Login User
export const loginUserApi = async (data: LoginData): Promise<UserAuth> => {
  const response = await instance.post<UserAuth>('/api/users/signin', data);
  return response.data;
};

// Logout User
export const logoutApi = async (): Promise<void> => {
  await instance.post('/api/users/signout');
};
