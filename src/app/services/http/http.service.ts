import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUrl } from 'src/app/helpers/http/get-url';
import { Credits, PersonCredits } from 'src/app/models/features/credits/credits';
import { MovieType, SearchFilter, TrendingTime, TrendingType, TvType } from 'src/app/models/features/index/filters';
import { IndexResponse, Media, MediaType, Mixed, Movie, Person, TV } from 'src/app/models/features/index/results';
import { ShowDetails, ShowPage } from 'src/app/models/features/show/results';

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

  getPersonCreditsObs(type: MediaType, id: string): Observable<PersonCredits> {
    const url = this.getPersonCredits(type, id);
    return this.http.get<PersonCredits>(url);
  }

}
