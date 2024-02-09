import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { IndexPage, IndexResponse, IndexResults, Mixed } from 'src/app/models/index/results';
import { HttpResponseService } from 'src/app/services/results/http-response/http-response.service';


@Injectable()
export class IndexResultsService {

  private readonly router = inject(Router);
  private readonly httResponseSvc = inject(HttpResponseService);

  getResults$(route: ActivatedRoute): Observable<IndexResults> {
    return this.httResponseSvc.getResponse$('index', route)
    .pipe(
      catchError( () => this.router.navigate(['error'] ) ),
      map( (res: IndexResponse<Mixed>) => (
        res ? this.transform(res, route.snapshot.params.type) : null
      ) ),
    )
  }

  private transform(response: IndexResponse<Mixed>, type: IndexPage): IndexResults {
    return {
      results: response.results,
      currentPage: response.page,
      totalPages: this.limitTo500(response.total_pages),
      type
    }
  }

  // api does not support request beyond page 500
  // https://www.themoviedb.org/talk/642c3c766e44bf0111a0e65b
  private limitTo500(num: number): number {
    return num < 500 ? num : 500;
  }

}
