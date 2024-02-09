import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { Biography } from 'src/app/models/biography/biography';
import { Media } from 'src/app/models/index/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';

@Injectable()
export class BiographyResultsService {

  private readonly router = inject(Router);
  private readonly httpResponseSvc = inject(HttpResponseService);

  getResults$(route: ActivatedRoute): Observable<Media[]> {
    return this.httpResponseSvc.getResponse$('biography', route)
      .pipe(
        catchError( () => this.router.navigate(['error']) ),
        map( (res: Biography) => res ? res.cast : null )
      )
  }
}
