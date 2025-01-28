import { instance } from './Api';
import {
  RegisterData,
  LoginData,
  RegisterResponse,
  LoginResponse,
} from '../redux/auth/types';

// Register
export const registerUserApi = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  const response = await instance.post<RegisterResponse>(
    '/api/users/signup',
    data
  );
  return response.data;
};

// Login
export const loginUserApi = async (
  credentials: LoginData
): Promise<LoginResponse> => {
  const response = await instance.post<LoginResponse>(
    '/api/users/signin',
    credentials
  );
  return response.data;
};

// logout
export const logOutApi = async (): Promise<void> => {
  await instance.post('/api/users/signout');
};
// POST
// /users/signout
// User sign out

// Parameters
// Try it out
// No parameters

