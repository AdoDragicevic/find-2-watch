export type ShowPage = 'tv' | 'movie' | 'person';

export type ShowDetails = TvDetails | PersonDetails | MovieDetails;

export interface TvDetails {
  backdrop_path: string;
  created_by: TvCreator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: { id: number, name: string }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Record<string, any>;
  next_episode_to_air: null;
  name?: string;
  title?: string;
  networks: ProductionCompany[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: any[];
  seasons: Season[];
  spoken_languages: Language[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface TvCreator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface PersonDetails {
  birthday: string | null;
  known_for_department: string;
  deathday: null | string;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string | null;
  profile_path: string | null;
  adult: boolean;
  imdb_id: string;
  homepage: null | string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: { id: number, name: string, poster_path: string, backdrop_path: string }[]
  budget: number
  genres: { id: number, name: string }[];
  homepage: string;
  id: number;
  imdb_id: string
  original_language: string
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: any[]
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: Status;
  tagline: string;
  name?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type Status =
  'Rumored' |
  'Planned' |
  'In Production' |
  'Post Production' |
  'Released' |
  'Canceled';

interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

interface Language {
  iso_639_1: string;
  name: string;
}
