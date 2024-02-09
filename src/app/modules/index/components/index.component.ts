import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {

  private readonly route = inject(ActivatedRoute);

  isSearchQueryRequired$ = this.route.queryParams
    .pipe(
      map( ({ query }) => {
        const isSearchPage = this.route.snapshot.params.type === 'search';
        return isSearchPage && !query;
      })
    );

}
