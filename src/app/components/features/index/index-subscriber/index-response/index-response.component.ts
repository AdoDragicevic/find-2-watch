import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexPage, IndexResponse, Mixed } from 'src/app/models/features/index/results';

@Component({
  selector: 'app-index-response',
  templateUrl: './index-response.component.html'
})
export class IndexResponseComponent implements OnInit {

  @Input() response: IndexResponse<Mixed>;

  page: IndexPage

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const route = this.route.snapshot.routeConfig.path.split('/')[0] as IndexPage;
    this.page = route;
  }

  get totalPages(): number {
    const { total_pages } = this.response;
    return total_pages >= 500 ? 500 : total_pages;
  }

  changePage(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }

}
