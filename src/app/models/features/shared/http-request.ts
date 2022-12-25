import { MovieType, SearchFilter, TrendingTime, TrendingType, TvType } from "../index/filters";
import { MediaType } from "../index/results";

export enum RequestErrorHandling {
  'MESSAGE',
  'ERROR_PAGE'
}

export type RequestConfig =
  MovieRequestConfig |
  TvRequestConfig |
  PersonRequestConfig |
  TrendingRequestConfig |
  RecommendationsRequestConfig |
  SimilarRequestConfig |
  SearchRequestConfig |
  ShowRequestConfig |
  CreditsRequestConfig |
  PersonCreditsRequestConfig;

export class ShowRequestConfig {

  name = 'show';

  constructor(
    public type: 'movie' | 'tv' | 'person',
    public id: string
  ) { }

}

export class MovieRequestConfig {

  name = 'movie';

  constructor(
    public filter: MovieType,
    public page = 1
  ) { }

}

export class TvRequestConfig {

  name = 'tv';

  constructor(
    public filter: TvType,
    public page = 1
  ) { }

}

export class TrendingRequestConfig {

  name = 'trending';

  constructor(
    public type: TrendingType,
    public time: TrendingTime,
    public page = 1
  ) { }

}

export class PersonRequestConfig {

  name = 'person';

  constructor(
    public page = 1
  ) { }

}

export class RecommendationsRequestConfig {

  name = 'recommendations';

  constructor(
    public type: MediaType,
    public id: string,
    public page = 1
  ) { }

}

export class SimilarRequestConfig {

  name = 'similar';

  constructor(
    public type: MediaType,
    public id: string,
    public page = 1
  ) { }

}

export class SearchRequestConfig {

  name = 'search';

  constructor(
    public filter: SearchFilter,
    public query: string,
    public page = 1
  ) { }

}

export class CreditsRequestConfig {

  constructor(
    public name: 'credits-cast' | 'credits-crew',
    public type: MediaType,
    public id: string
  ) { }

}

export class PersonCreditsRequestConfig {

  constructor(
    public name: 'person-credits-cast' | 'person-credits-crew',
    public type: MediaType,
    public id: string
  ) { }

}
