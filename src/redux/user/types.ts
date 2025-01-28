export interface PetUProfile {
  _id: string;
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  token: string;
  pets: PetUProfile[];
}

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
