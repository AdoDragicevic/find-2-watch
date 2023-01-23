import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { RequestType } from 'src/app/models/shared/http-request';
import { ShowDetails } from 'src/app/models/shared/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';

@Injectable()
export class ShowResultsService {

  constructor(
    private readonly router: Router,
    private readonly httpResponseSvc: HttpResponseService
  ) { }

  getResults$(route: ActivatedRoute) {
    return this.httpResponseSvc.getResponse$('show', route)
      .pipe(
        catchError( () => this.router.navigate(['error']) ),
        map( (res: ShowDetails) => (
          res ?
          { type: route.snapshot.params.type, data: res } :
          null
        ) )
      )
  }

}
