import { MovieType, SearchFilter, TrendingTime, TrendingType, TvType } from "src/app/models/index/filters";
import { MediaType } from "src/app/models/index/results";
import { ShowPage } from "src/app/models/shared/results";
import { environment } from "src/environments/environment";

const { url, key } = environment;

export class GetUrl {

  protected getTrendingUrl(type: TrendingType, time: TrendingTime, page: number): string {
    return `${url}/trending/${type}/${time}?page=${page}&api_key=${key}`;
  }

  protected getMoviesUrl(filter: MovieType, page: number): string {
    return `${url}/movie/${filter}?page=${page}&api_key=${key}`;
  }

  protected getPeopleUrl(page: number): string {
    return `${url}/person/popular?page=${page}&api_key=${key}`;
  }

  protected getTvUrl(filter: TvType, page: number): string {
    return `${url}/tv/${filter}?page=${page}&api_key=${key}`;
  }

  protected getSearchUrl(filter: SearchFilter, query: string, page: number): string {
    return `${url}/search/${filter}?query=${query}&page=${page}&api_key=${key}`;
  }

  protected getRecommendationsUrl(type: MediaType, id: string, page: number): string {
    return `${url}/${type}/${id}/recommendations?api_key=${key}&page=${page}`;
  }

  protected getSimilarUrl(type: MediaType, id: string, page: number): string {
    return `${url}/${type}/${id}/similar?api_key=${key}&language=en-US&page=${page}`;
  }

  protected getShowUrl(type: ShowPage, id: string): string {
    return `${url}/${type}/${id}?api_key=${key}&language=en-US`;
  }

  protected getCreditsUrl(type: MediaType, id: string): string {
    return `${url}/${type}/${id}/credits?api_key=${key}&language=en-US`;
  }

  protected getBiographyUrl(type: MediaType, id: string): string {
    return `${url}/person/${id}/${type}_credits?api_key=${key}&language=en-US`;
  }

}
