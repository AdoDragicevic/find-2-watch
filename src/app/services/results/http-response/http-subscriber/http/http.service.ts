import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUrl } from 'src/app/helpers/get-url';
import { Biography, Credits } from 'src/app/models/credits/credits';
import { MovieType, SearchFilter, TrendingTime, TrendingType, TvType } from 'src/app/models/index/filters';
import { IndexResponse, Media, MediaType, Mixed, Movie, Person, TV } from 'src/app/models/index/results';
import { ShowDetails, ShowPage } from 'src/app/models/shared/results';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends GetUrl {

  constructor(
    private readonly http: HttpClient,
  ) {
    super();
  }

  getMoviesObs(type: MovieType, page = 1): Observable<IndexResponse<Movie>> {
    const url = this.getMoviesUrl(type, page);
    return this.http.get<IndexResponse<Movie>>(url);
  }

  getTvObs(tv: TvType, page = 1): Observable<IndexResponse<TV>> {
    const url = this.getTvUrl(tv, page);
    return this.http.get<IndexResponse<TV>>(url);
  }

  getPeopleObs(page = 1): Observable<IndexResponse<Person>> {
    const url = this.getPeopleUrl(page);
    return this.http.get<IndexResponse<Person>>(url);
  }

  getTrendingObs(media: TrendingType, time: TrendingTime, page = 1): Observable<IndexResponse<Mixed>> {
    const url = this.getTrendingUrl(media, time, page);
    return this.http.get<IndexResponse<Mixed>>(url);
  }

  getSearchObs(filter: SearchFilter, query: string, page = 1): Observable<IndexResponse<Mixed>> {
    const url = this.getSearchUrl(filter, query, page);
    return this.http.get<IndexResponse<Mixed>>(url);
  }

  getRecommendationsObs(type: MediaType, id: string, page = 1): Observable<IndexResponse<Media>> {
    const url = this.getRecommendationsUrl(type, id, page);
    return this.http.get<IndexResponse<Media>>(url);
  }

  getSimilarObs(type: MediaType, id: string, page = 1): Observable<IndexResponse<Media>> {
    const url = this.getSimilarUrl(type, id, page);
    return this.http.get<IndexResponse<Media>>(url);
  }

  getShowObs(type: ShowPage, id: string): Observable<ShowDetails> {
    const url = this.getShowUrl(type, id);
    return this.http.get<ShowDetails>(url);
  }

  getCreditsObs(type: MediaType, id: string): Observable<Credits> {
    const url = this.getCreditsUrl(type, id);
    return this.http.get<Credits>(url);
  }

  getBiographyObs(type: MediaType, id: string): Observable<Biography> {
    const url = this.getBiographyUrl(type, id);
    return this.http.get<Biography>(url);
  }

}
