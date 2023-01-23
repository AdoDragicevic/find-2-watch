import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { MovieRequestConfig, PersonRequestConfig, RecommendationsRequestConfig, RequestConfig, SearchRequestConfig, SimilarRequestConfig, TrendingRequestConfig, TvRequestConfig } from 'src/app/models/shared/http-request';

@Injectable({
  providedIn: 'root'
})
export class IndexRequestConfigService {

  getConfig(params: Params, queryParams: Params): RequestConfig | null {
    switch (params['type']) {
      case 'movie': {
        const { filter, page } = queryParams;
        if (!filter) return null;
        return new MovieRequestConfig(filter, page);
      }
      case 'tv': {
        const { filter, page } = queryParams;
        if (!filter) return null;
        return new TvRequestConfig(filter, page);
      }
      case 'person': {
        const { page } = queryParams;
        return new PersonRequestConfig(page);
      }
      case 'search': {
        const { filter, query, page } = queryParams;
        if (!filter || !query) return null;
        return new SearchRequestConfig(filter, query, page);
      }
      case 'trending': {
        const { type, time, page } = queryParams;
        if (!type || !time) return null;
        return new TrendingRequestConfig(type, time, page);
      }
      case 'similar': {
        const { mediaType, id } = params;
        const { page } = queryParams;
        if (!mediaType || !id) return null;
        return new SimilarRequestConfig(mediaType, id, page);
      }
      case 'recommendations': {
        const { mediaType, id } = params;
        const { page } = queryParams;
        if (!mediaType || !id) return null;
        return new RecommendationsRequestConfig(mediaType, id, page);
      }
    }

  }

}
