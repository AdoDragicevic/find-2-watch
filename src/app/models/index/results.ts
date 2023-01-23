export type IndexPage =
  'trending' |
  'movie' |
  'tv' |
  'person' |
  'search' |
  'recommendations' |
  'similar';

export interface IndexResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

export interface IndexResults {
  type: IndexPage;
  currentPage: number;
  totalPages: number;
  results: Mixed[];
}

export type MediaType = 'movie' | 'tv';

export type Media = TV | Movie;

export type Mixed = Media | Person;

export type Trending = Mixed;

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface TV {
  poster_path: string | null;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name?: string;
  title?: string;
  original_name: string;
}

export class Person {
  constructor(
    public profile_path: string,
    public adult: boolean,
    public id: number,
    public known_for: KnownFor[],
    public known_for_department: string,
    public name: string,
    public popularity: number
  ) {}
}

interface KnownFor {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  original_language: string;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  first_air_date?: string;
  origin_country?: string[];
  original_name?: string;
}
