import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BiographyRequestConfig, CreditsRequestConfig, RecommendationsRequestConfig, RequestType, ShowRequestConfig, SimilarRequestConfig } from 'src/app/models/shared/http-request';
import { IndexRequestConfigService } from './index-request-config/index-request-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestConfigService {

  constructor(
    private readonly indexRequestConfigSvc: IndexRequestConfigService
  ) { }

  getConfig(requestType: RequestType, params: Params, queryParams: Params) {
    const { type, id } = params;
    const { page } = queryParams;
    if ( requestType !== 'index' && (!id || !type) ) {
      throw new Error('Invalid filters');
    }
    switch (requestType) {
      case 'index':
        return this.indexRequestConfigSvc.getConfig(params, queryParams);
      case 'show':
        return new ShowRequestConfig(type, id);
      case 'credits':
        return new CreditsRequestConfig(type, id);
      case 'biography':
        return new BiographyRequestConfig(type, id);
      case 'recommendations':
        return new RecommendationsRequestConfig(type, id, page);
      case 'similar':
        return new SimilarRequestConfig(type, id, page);
      default:
        return null;
    }
  }

}
