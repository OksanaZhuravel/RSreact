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
export interface SearchBarProps {
  filter: { query: string };
  setFilter: React.Dispatch<React.SetStateAction<{ query: string }>>;
}
export interface FormData {
  name: string;
  surname: string;
  birthday: string;
  favoriteColor: string;
  allowNameUsage: boolean;
  gender: string;
  file: FileList | null;
}
export interface CardProps {
  item: DataApi;
}
export interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
export interface NavProps {
  handleClick: () => void;
}
export interface SearchBarProps {
  filter: { query: string };
  setFilter: React.Dispatch<React.SetStateAction<{ query: string }>>;
  fetchSearchData: (query: string) => void;
}
