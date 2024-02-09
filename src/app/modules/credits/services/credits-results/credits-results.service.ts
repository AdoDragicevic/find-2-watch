import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { Credits } from 'src/app/models/credits/credits';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';

@Injectable({
  providedIn: 'root'
})
export class CreditsResultsService {

  private readonly router = inject(Router);
  private readonly httpResponseSvc = inject(HttpResponseService);

  getResults$(route: ActivatedRoute): Observable<Credits> {
    return this.httpResponseSvc.getResponse$('credits', route)
    .pipe(
      catchError( () => this.router.navigate(['error']) ),
      tap( (data: Credits | null) => data ) // adds TS support
    )
  }
}
