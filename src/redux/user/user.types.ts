export interface PetProfile {
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
  pets: PetProfile[];
}

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
