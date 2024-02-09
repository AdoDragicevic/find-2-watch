import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IndexResults } from 'src/app/models/index/results';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html'
})
export class IndexListComponent {

  @Input() data: IndexResults;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  get isEmpty(): boolean {
    return this.data.results.length === 0;
  }

  onChangePage(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }

}
