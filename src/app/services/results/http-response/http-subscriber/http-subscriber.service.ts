import { Injectable } from '@angular/core';
import { BiographyRequestConfig, CreditsRequestConfig, MovieRequestConfig, PersonRequestConfig, RecommendationsRequestConfig, RequestConfig, RequestErrorHandling, SearchRequestConfig, ShowRequestConfig, SimilarRequestConfig, TrendingRequestConfig, TvRequestConfig } from 'src/app/models/shared/http-request';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpSubscriberService {

  constructor(
    private readonly httpSvc: HttpService
  ) { }

  getRequest$(config: RequestConfig) {
    switch(config.name) {
      case 'movie': {
        const { filter, page } = config as MovieRequestConfig;
        return this.httpSvc.getMoviesObs(filter, page);
      }
      case 'tv': {
        const { filter, page } = config as TvRequestConfig;
        return this.httpSvc.getTvObs(filter, page);
      }
      case 'person': {
        const { page } = config as PersonRequestConfig;
        return this.httpSvc.getPeopleObs(page);
      }
      case 'trending': {
        const { type, time, page } = config as TrendingRequestConfig;
        return this.httpSvc.getTrendingObs(type, time, page);
      }
      case 'recommendations': {
        const { type, id, page } = config as RecommendationsRequestConfig;
        return this.httpSvc.getRecommendationsObs(type, id, page);
      }
      case 'similar': {
        const { type, id, page } = config as SimilarRequestConfig;
        return this.httpSvc.getSimilarObs(type, id, page);
      }
      case 'search': {
        const { filter, query, page } = config as SearchRequestConfig;
        return this.httpSvc.getSearchObs(filter, query, page);
      }
      case 'show': {
        const { type, id } = config as ShowRequestConfig;
        return this.httpSvc.getShowObs(type, id);
      }
      case 'biography': {
        const { type, id } = config as BiographyRequestConfig;
        return this.httpSvc.getBiographyObs(type, id);
      }
      case 'credits': {
        const { type, id } = config as CreditsRequestConfig;
        return this.httpSvc.getCreditsObs(type, id);
      }
    }
  }

}
