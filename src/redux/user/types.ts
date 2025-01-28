export interface Pet {
  id: string;
  name: string;
  age: number;
  species: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  pets: Pet[];
}

export type GetUserProfileResponse = UserProfile;

export interface AddPetRequest {
  name: string;
  age: number;
  species: string;
}

export type AddPetResponse = Pet;

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
