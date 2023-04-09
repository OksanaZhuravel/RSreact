export interface DataApi {
  id: number;
  name: string;
  status: string;
  species: string;

  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}
