import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, concat, filter, map, of, switchMap } from 'rxjs';
import { HttpSubscriberService } from './http-subscriber/http-subscriber.service';
import { HttpRequestConfigService } from './http-request-config/http-request-config.service';
import { RequestType } from 'src/app/models/shared/http-request';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseService {

  constructor(
    private readonly httpRequestConfigSvc: HttpRequestConfigService,
    private readonly httpSubscriberSvc: HttpSubscriberService,
  ) { }

  getResponse$(requestType: RequestType, route: ActivatedRoute) {
    return combineLatest([route.params, route.queryParams])
      .pipe(
        map( url => this.httpRequestConfigSvc.getConfig(requestType, ...url) ),
        filter( config => !!config ),
        switchMap( config => (
          concat(
            of (null), // first emit null (to show loading spinner in template)...
            this.httpSubscriberSvc.getRequest$(config) // ... then emit response
          )
        ) )
      )
  }

}
