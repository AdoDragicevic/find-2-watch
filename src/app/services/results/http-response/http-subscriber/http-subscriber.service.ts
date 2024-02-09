import { Injectable, inject } from '@angular/core';
import { BiographyRequestConfig, CreditsRequestConfig, MovieRequestConfig, PersonRequestConfig, RecommendationsRequestConfig, RequestConfig, RequestErrorHandling, SearchRequestConfig, ShowRequestConfig, SimilarRequestConfig, TrendingRequestConfig, TvRequestConfig } from 'src/app/models/shared/http-request';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpSubscriberService {

  private readonly httpSvc = inject(HttpService);

  getRequest$(config: RequestConfig) {
    switch(config.name) {
      case 'movie': {
        const { filter, page } = config as MovieRequestConfig;
        return this.httpSvc.getMovies$(filter, page);
      }
      case 'tv': {
        const { filter, page } = config as TvRequestConfig;
        return this.httpSvc.getTv$(filter, page);
      }
      case 'person': {
        const { page } = config as PersonRequestConfig;
        return this.httpSvc.getPeople$(page);
      }
      case 'trending': {
        const { type, time, page } = config as TrendingRequestConfig;
        return this.httpSvc.getTrending$(type, time, page);
      }
      case 'recommendations': {
        const { type, id, page } = config as RecommendationsRequestConfig;
        return this.httpSvc.getRecommendations$(type, id, page);
      }
      case 'similar': {
        const { type, id, page } = config as SimilarRequestConfig;
        return this.httpSvc.getSimilar$(type, id, page);
      }
      case 'search': {
        const { filter, query, page } = config as SearchRequestConfig;
        return this.httpSvc.getSearch$(filter, query, page);
      }
      case 'show': {
        const { type, id } = config as ShowRequestConfig;
        return this.httpSvc.getShow$(type, id);
      }
      case 'biography': {
        const { type, id } = config as BiographyRequestConfig;
        return this.httpSvc.getBiography$(type, id);
      }
      case 'credits': {
        const { type, id } = config as CreditsRequestConfig;
        return this.httpSvc.getCredits$(type, id);
      }
    }
  }

}
