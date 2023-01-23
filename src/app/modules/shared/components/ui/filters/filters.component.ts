import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppliedFilters, Filters } from 'src/app/models/index/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Input() filters: Filters;

  @Output() filterSelect = new EventEmitter<AppliedFilters>();

  handleClick(category: string, name: string): void {
    const appliedFilter = { [category]: name };
    this.filterSelect.emit(appliedFilter);
  }

}
