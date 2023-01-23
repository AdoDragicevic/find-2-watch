import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IndexResults } from 'src/app/models/index/results';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.scss']
})
export class IndexListComponent {

  @Input() data: IndexResults;

  constructor (
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

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
