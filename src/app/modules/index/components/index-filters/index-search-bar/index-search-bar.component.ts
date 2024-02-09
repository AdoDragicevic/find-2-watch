import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-index-search-bar',
  templateUrl: './index-search-bar.component.html',
  styleUrls: ['./index-search-bar.component.scss']
})
export class IndexSearchBarComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  @ViewChild('inputEl', { static: true }) input: ElementRef;

  searchForm = new FormGroup({
    'searchInput': new FormControl(null)
  });

  ngOnInit(): void {
    this.syncUrlWithSearchInput();
    this.focusInputOnFilterChange();
  }

  private syncUrlWithSearchInput(): void {
    this.searchForm.get('searchInput').valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(this.updateQueryParams)
  }

  private focusInputOnFilterChange(): void {
    this.route.queryParams
      .pipe(
        map( ({ filter }) => filter ),
        distinctUntilChanged()
      )
      .subscribe(this.focusSearchInput);
  }

  private updateQueryParams = (searchInputVal: string): void => {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { query: searchInputVal },
      queryParamsHandling: 'merge'
    });
  }

  private focusSearchInput = (): void => {
    this.input.nativeElement.focus();
  }

}
