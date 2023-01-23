import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  isSearchQueryRequired$: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isSearchQueryRequired$ = this.route.queryParams.pipe(
      map( ({ query }) => !query && this.route.snapshot.params.type === 'search' )
    )
  }

}
