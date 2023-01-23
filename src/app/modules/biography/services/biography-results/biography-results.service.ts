import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, tap } from 'rxjs';
import { Biography } from 'src/app/models/credits/credits';
import { Media } from 'src/app/models/index/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';

@Injectable()
export class BiographyResultsService {

  constructor(
    private readonly router: Router,
    private readonly httpResponseSvc: HttpResponseService
  ) { }

  getResults$(route: ActivatedRoute): Observable<Media[]> {
    return this.httpResponseSvc.getResponse$('biography', route)
      .pipe(
        catchError( () => this.router.navigate(['error']) ),
        map( (res: Biography) => res ? res.cast : null )
      )
  }
}
