import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IndexPage } from 'src/app/models/features/index/results';
import { FiltersService } from 'src/app/services/features/index/filters/filters.service';

@Component({
  selector: 'app-index-filters',
  templateUrl: './index-filters.component.html',
  styleUrls: ['./index-filters.component.scss']
})
export class IndexFiltersComponent implements OnInit {

  constructor(
    public readonly filtersSvc: FiltersService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.filtersSvc.selectedFilters = queryParams;
      this.addToQueryParams(this.filtersSvc.appliedFilters);
    });
  }

  get isSearchPage(): boolean {
    const route = this.route.snapshot.routeConfig.path.split('/')[0] as IndexPage;
    return route === 'search';
  }

  onSelectFilter(category: string, name: string) {
    this.filtersSvc.selectedFilter = { category, name };
    this.addToQueryParams({ [category]: name, page: 1 });
  }

  private addToQueryParams = (queryParams: Params) => {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

}
