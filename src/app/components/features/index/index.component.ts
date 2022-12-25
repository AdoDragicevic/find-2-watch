import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexPage } from 'src/app/models/features/index/results';
import { RequestConfig, RequestErrorHandling } from 'src/app/models/features/shared/http-request';
import { IndexRequestConfigService } from 'src/app/services/features/index/index-request-config/index-request-config.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  requestConfig: RequestConfig = null;
  errorHandling = RequestErrorHandling.ERROR_PAGE;
  isSearchQueryMissing = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly indexRequestConfigSvc: IndexRequestConfigService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe( queryParams => {
      const route = this.route.routeConfig.path.split('/')[0] as IndexPage;
      const params = this.route.snapshot.params;
      this.isSearchQueryMissing = (route === 'search' && !queryParams.query);
      this.requestConfig = this.indexRequestConfigSvc.getConfig(route, params, queryParams);
    })
  }

}
