import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { IndexPage } from 'src/app/models/features/index/results';
import { MovieRequestConfig, PersonRequestConfig, RecommendationsRequestConfig, RequestConfig, SearchRequestConfig, SimilarRequestConfig, TrendingRequestConfig, TvRequestConfig } from 'src/app/models/features/shared/http-request';

@Injectable({
  providedIn: 'root'
})
export class IndexRequestConfigService {

  getConfig(route: IndexPage, params: Params, queryParams: Params): RequestConfig {
    switch (route) {
      case 'movie': {
        const { filter, page } = queryParams;
        if (!filter) return;
        return new MovieRequestConfig(filter, page);
      }
      case 'tv': {
        const { filter, page } = queryParams;
        if (!filter) return;
        return new TvRequestConfig(filter, page);
      }
      case 'person': {
        const { page } = queryParams;
        return new PersonRequestConfig(page);
      }
      case 'recommendations': {
        const { mediaType, id } = params;
        const { page } = queryParams;
        if (!mediaType || !id) return;
        return new RecommendationsRequestConfig(mediaType, id, page);
      }
      case 'similar': {
        const { mediaType, id } = params;
        const { page } = queryParams;
        if (!mediaType || !id) return;
        return new SimilarRequestConfig(mediaType, id, page);
      }
      case 'search': {
        const { filter, query, page } = queryParams;
        if (!filter || !query) return;
        return new SearchRequestConfig(filter, query, page);
      }
      case 'trending': {
        const { type, time, page } = queryParams;
        if (!type || !time) return;
        return new TrendingRequestConfig(type, time, page);
      }
    }

  }

}
