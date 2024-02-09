import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppliedFilters } from 'src/app/models/index/filters';
import { IndexFiltersService } from '../../services/index-filters/index-filters.service';

@Component({
  selector: 'app-index-filters',
  templateUrl: './index-filters.component.html',
  styleUrls: ['./index-filters.component.scss']
})
export class IndexFiltersComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly filtersSvc = inject(IndexFiltersService);

  filters$ = this.filtersSvc.filters$(this.route);

  onFilterSelect(filters: AppliedFilters): void {
    const appliedFilters = { ...filters, page: '1' };
    this.filtersSvc.addToQueryParams(appliedFilters, this.route);
  }

}
