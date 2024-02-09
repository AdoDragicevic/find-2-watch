import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUrl } from 'src/app/helpers/get-url';
import { Biography } from 'src/app/models/biography/biography';
import { Credits } from 'src/app/models/credits/credits';
import { MovieType, SearchFilter, TrendingTime, TrendingType, TvType } from 'src/app/models/index/filters';
import { IndexResponse, Media, MediaType, Mixed, Movie, Person, TV } from 'src/app/models/index/results';
import { ShowDetails, ShowPage } from 'src/app/models/shared/results';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends GetUrl {

  private readonly http = inject(HttpClient);

  getMovies$(type: MovieType, page = 1): Observable<IndexResponse<Movie>> {
    const url = this.getMoviesUrl(type, page);
    return this.http.get<IndexResponse<Movie>>(url);
  }

  getTv$(tv: TvType, page = 1): Observable<IndexResponse<TV>> {
    const url = this.getTvUrl(tv, page);
    return this.http.get<IndexResponse<TV>>(url);
  }

  getPeople$(page = 1): Observable<IndexResponse<Person>> {
    const url = this.getPeopleUrl(page);
    return this.http.get<IndexResponse<Person>>(url);
  }

  getTrending$(media: TrendingType, time: TrendingTime, page = 1): Observable<IndexResponse<Mixed>> {
    const url = this.getTrendingUrl(media, time, page);
    return this.http.get<IndexResponse<Mixed>>(url);
  }

  getSearch$(filter: SearchFilter, query: string, page = 1): Observable<IndexResponse<Mixed>> {
    const url = this.getSearchUrl(filter, query, page);
    return this.http.get<IndexResponse<Mixed>>(url);
  }

  getRecommendations$(type: MediaType, id: string, page = 1): Observable<IndexResponse<Media>> {
    const url = this.getRecommendationsUrl(type, id, page);
    return this.http.get<IndexResponse<Media>>(url);
  }

  getSimilar$(type: MediaType, id: string, page = 1): Observable<IndexResponse<Media>> {
    const url = this.getSimilarUrl(type, id, page);
    return this.http.get<IndexResponse<Media>>(url);
  }

  getShow$(type: ShowPage, id: string): Observable<ShowDetails> {
    const url = this.getShowUrl(type, id);
    return this.http.get<ShowDetails>(url);
  }

  getCredits$(type: MediaType, id: string): Observable<Credits> {
    const url = this.getCreditsUrl(type, id);
    return this.http.get<Credits>(url);
  }

  getBiography$(type: MediaType, id: string): Observable<Biography> {
    const url = this.getBiographyUrl(type, id);
    return this.http.get<Biography>(url);
  }

}
