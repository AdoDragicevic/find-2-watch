import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/models/index/filters';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent {

  @Input() filters: Filter[];

  @Output() filterSelect = new EventEmitter<string>();

  handleClick(filterName: string): void {
    this.filterSelect.emit(filterName);
  }

}
