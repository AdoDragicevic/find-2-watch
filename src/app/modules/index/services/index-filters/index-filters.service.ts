import { Injectable } from '@angular/core';
import { allFilters } from 'src/app/data/filters';
import { AppliedFilters, Filters } from 'src/app/models/index/filters';
import { IndexPage } from 'src/app/models/index/results';

@Injectable()
export class IndexFiltersService {

  private readonly allFilters = allFilters;

  getFilters(page: IndexPage): Filters {
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
    return this.getAppliedFilters(filters);
  }

  private getAppliedFilters(filters: Filters): AppliedFilters {
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
