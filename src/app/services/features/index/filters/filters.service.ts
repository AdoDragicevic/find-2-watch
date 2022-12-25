import { Injectable } from '@angular/core';
import { allFilters } from 'src/app/data/features/index/filters';
import { AppliedFilters, Filters } from 'src/app/models/features/index/filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private readonly allFilters = allFilters;

  get filters(): Filters {
    const page = window.location.pathname.substring(1);
    return this.allFilters[page];
  }

  get appliedFilters(): AppliedFilters {
    const applied = {} as AppliedFilters;
    for (let key in this.filters) {
      const category = this.filters[key];
      category.forEach(filter => {
        if (filter.isApplied) {
          applied[key] = filter.name;
        }
      })
    }
    return applied;
  }

  set selectedFilter(filter: { category: string, name: string }) {
    const { category, name } = filter;
    this.filters[category].forEach(filter => {
      filter.isApplied = filter.name === name;
    });
  }

  set selectedFilters(filters: Record<string, string>) {
    for (let key in filters) {
      if (key in this.filters) {
        this.selectedFilter = { category: key, name: filters[key] };
      }
    }
  }

}
