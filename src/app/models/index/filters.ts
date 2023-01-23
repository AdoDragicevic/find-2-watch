// FILTERS

export interface AllFilters {
  [type: string]: Filters;
}

export interface Filters {
  [category: string]: Filter[];
}

export interface Filter {
  name: string;
  isApplied: boolean;
}

export interface AppliedFilters {
  [category: string]: string;
}

// MOVIE FILTERS

export interface MoviesFilters {
  filter: MovieType;
}

export type MovieType = 'latest' | 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

// TV FILTERS

export interface TvFilters {
  filter: TvType;
}

export type TvType = 'latest' | 'popular' | 'top_rated' | 'on_the_air';


// TRENDING FILTERS

export interface TrendingFilters {
  type: TrendingType;
  time: TrendingTime;
}

export type TrendingTime = 'day' | 'week';

export type TrendingType = 'all' | 'movie' | 'tv' | 'person';

// SEARCH FILTERS

export interface SearchFilters {
  filter: SearchFilter;
}

export type SearchFilter = 'multi' | 'movie' | 'tv' | 'person';
