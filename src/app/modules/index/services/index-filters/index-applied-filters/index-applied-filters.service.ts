import { Injectable, inject } from '@angular/core';
import { ALL_FILTERS } from 'src/app/data/filters';
import { AppliedFilters, Filters } from 'src/app/models/index/filters';
import { IndexPage } from 'src/app/models/index/results';

@Injectable()
export class IndexAppliedFiltersService {

  private readonly allFilters = inject(ALL_FILTERS);

  getPageFilters(page: IndexPage): Filters {
    return this.allFilters[page];
  }

  setAppliedFilters(page: IndexPage, selectedFilters: AppliedFilters): AppliedFilters {
    const filters = this.allFilters[page];
    if (!filters) return;
    for (let key in selectedFilters) {
      const category = filters[key];
      const name = selectedFilters[key];
      if (!category) break;
      const filterIndx = category.findIndex(filter => filter.name === name);
      if (filterIndx === -1) break;
      category.forEach(filter => filter.isApplied = filter.name === name);
    }
  }

  getAppliedFilters(filters: Filters): AppliedFilters {
    const applied = {} as AppliedFilters;
    for (let key in filters) {
      const category = filters[key];
      category.forEach(filter => {
        if (filter.isApplied) {
          applied[key] = filter.name;
        }
      })
    }
    return applied;
  }

}
