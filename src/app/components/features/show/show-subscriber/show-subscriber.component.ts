import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestErrorHandling, ShowRequestConfig } from 'src/app/models/features/shared/http-request';
import { ShowDetails, ShowPage } from 'src/app/models/features/show/results';
import { HttpSubscriberService } from 'src/app/services/http-subscriber/http-subscriber.service';

@Component({
  selector: 'app-show-subscriber',
  templateUrl: './show-subscriber.component.html'
})
export class ShowSubscriberComponent implements OnInit {

  request$: Observable<ShowDetails>;
  error$: Observable<any>;
  type: ShowPage;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpSubscriberSvc: HttpSubscriberService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(this.setRequest);
  }

  private setRequest = () => {
    const route = this.route.snapshot.routeConfig.path.split('/')[0] as ShowPage;
    const { id } = this.route.snapshot.params;
    const config = new ShowRequestConfig(route, id);
    this.type = route;
    this.request$ = this.httpSubscriberSvc.getRequest$(config) as Observable<ShowDetails>;
    this.error$ = this.httpSubscriberSvc.getError$(this.request$, RequestErrorHandling.ERROR_PAGE);
  }

}
