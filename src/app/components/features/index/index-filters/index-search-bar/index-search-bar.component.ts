import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-index-search-bar',
  templateUrl: './index-search-bar.component.html',
  styleUrls: ['./index-search-bar.component.scss']
})
export class IndexSearchBarComponent implements OnInit {

  @ViewChild('inputEl', { static: true }) input: ElementRef;

  searchForm = new FormGroup({
    'searchInput': new FormControl(null)
  });

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateUrlWithSearchTerm();
    this.focusInputOnFilterChange();
  }

  private updateUrlWithSearchTerm = (): void => {
    this.searchForm.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged())
    .subscribe(({ searchInput }) => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { query: searchInput },
        queryParamsHandling: 'merge'
      });
    })
  }

  private focusInputOnFilterChange = () => {
    this.route.queryParams
      .pipe(
        map(p => p['filter']),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.input.nativeElement.focus();
      });
  }

}
