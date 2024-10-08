export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  rating: {
    average: number;
  };
  genres: string[];
  summary: string;
}
