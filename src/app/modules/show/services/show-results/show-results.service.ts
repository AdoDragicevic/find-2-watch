import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { ShowDetails, ShowPage } from 'src/app/models/shared/results';
import { ShowResults } from 'src/app/models/show/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';

@Injectable()
export class ShowResultsService {

  private readonly router = inject(Router);
  private readonly httpResponseSvc = inject(HttpResponseService);

  getResults$(route: ActivatedRoute): Observable<ShowResults | null> {
    return this.httpResponseSvc.getResponse$('show', route)
      .pipe(
        catchError( () => this.router.navigate(['error']) ),
        map( (res: ShowDetails) => {
          const page = <ShowPage>route.snapshot.params['type'];
          return res ? { type: page, data: res } : null;
        } )
      )
  }

}
