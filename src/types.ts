export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  rating: number;
  bio: string;
  imageUrl: string;
  filmography: string[];
}

export interface Video {
  id: string;
  title: string;
  genres: string[];
  synopsis: string;
  thumbnailUrl: string;
  cast: string[];
  rating: number;
  releaseYear: number;
}
