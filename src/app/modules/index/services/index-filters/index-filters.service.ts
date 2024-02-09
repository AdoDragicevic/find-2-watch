import { Injectable, inject } from '@angular/core';
import { IndexAppliedFiltersService } from './index-applied-filters/index-applied-filters.service';
import { IndexPage } from 'src/app/models/index/results';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { AppliedFilters, FiltersData } from 'src/app/models/index/filters';

@Injectable()
export class IndexFiltersService {

  private readonly router = inject(Router);
  private readonly appliedFiltersSvc = inject(IndexAppliedFiltersService);

  filters$(route: ActivatedRoute): Observable<FiltersData> {
    const { params, queryParams } = route;
    return combineLatest([params, queryParams])
      .pipe(
        map(this.getIndexPageAndQueryParams),
        tap(this.setActiveFilters),
        map(([ indexPage ]) => indexPage),
        map(this.getFiltersData),
        tap(({ appliedFilters }) => {
          this.addToQueryParams(appliedFilters, route)
        })
      )
  }

  addToQueryParams = (filters: AppliedFilters, route: ActivatedRoute): void => {
    this.router.navigate([], {
      relativeTo: route,
      queryParams: filters,
      queryParamsHandling: 'merge'
    });
  };

  private getIndexPageAndQueryParams([params, queryParams]: [Params, Params]): [IndexPage, Params] {
    const page = params['type'] as IndexPage;
    return [ page, queryParams ];
  }

  private setActiveFilters = ([page, queryParams]: [IndexPage, Params]) => {
    this.appliedFiltersSvc.setAppliedFilters(page, queryParams);
  }

  private getFiltersData = (page: IndexPage): FiltersData => {
    const isSearchPage = page === 'search';
    const pageFilters = this.appliedFiltersSvc.getPageFilters(page);
    const appliedFilters = this.appliedFiltersSvc.getAppliedFilters(pageFilters);
    return { isSearchPage, pageFilters, appliedFilters };
  }

}
