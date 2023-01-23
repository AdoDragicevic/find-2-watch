import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AppliedFilters, Filters } from 'src/app/models/index/filters';
import { IndexPage } from 'src/app/models/index/results';
import { IndexFiltersService } from '../../services/index-filters/index-filters.service';

@Component({
  selector: 'app-index-filters',
  templateUrl: './index-filters.component.html',
  styleUrls: ['./index-filters.component.scss']
})
export class IndexFiltersComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly indexFiltersSvc: IndexFiltersService
  ) { }

  ngOnInit(): void {
    const { params, queryParams } = this.route;
    combineLatest([params, queryParams]).subscribe(this.syncAppliedFilters);
  }

  get filters(): Filters {
    const page = this.route.snapshot.params['type'];
    return this.indexFiltersSvc.getFilters(page);
  }

  get isShowSearchBar(): boolean {
    const page = this.route.snapshot.params['type'];
    return page === 'search';
  }

  onFilterSelect(filter: AppliedFilters): void {
    this.addToQueryParams({ ...filter, page: '1' });
  }

  private syncAppliedFilters = (): void => {
    const { params, queryParams } = this.route.snapshot;
    const page = params['type'] as IndexPage;
    const appliedFilters = this.indexFiltersSvc.setAppliedFilters(page, queryParams);
    this.addToQueryParams(appliedFilters);
  }

  private addToQueryParams = (filters: AppliedFilters): void => {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filters,
      queryParamsHandling: 'merge'
    });
  };

}
