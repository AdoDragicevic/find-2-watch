import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, tap } from 'rxjs';
import { IndexPage, IndexResponse, IndexResults, Mixed } from 'src/app/models/index/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';


@Injectable()
export class IndexResultsService {

  constructor(
    private readonly router: Router,
    private readonly httResponseSvc: HttpResponseService
  ) { }

  getResults$(route: ActivatedRoute): Observable<IndexResults> {
    return this.httResponseSvc.getResponse$('index', route)
    .pipe(
      catchError( () => this.router.navigate(['error']) ),
      map( (res: IndexResponse<Mixed>) => (
        res ? this.transform(res, route.snapshot.params.type) : null
      ) ),
    )
  }

  private transform(response: IndexResponse<Mixed>, type: IndexPage): IndexResults {
    return {
      currentPage: response.page,
      totalPages: response.total_pages,
      results: response.results,
      type
    }
  }

}
