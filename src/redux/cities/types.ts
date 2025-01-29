export interface City {
  _id: string;
  useCounty: string;
  stateEn: string;
  cityEn: string;
  countyEn: string;
}

export interface CitiesState {
  cities: City[];
  locations: City[];
  loading: boolean;
  error: string | null;
}
