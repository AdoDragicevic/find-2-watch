import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexResponse, Mixed } from 'src/app/models/features/index/results';
import { RequestConfig, RequestErrorHandling } from 'src/app/models/features/shared/http-request';
import { HttpSubscriberService } from 'src/app/services/http-subscriber/http-subscriber.service';

@Component({
  selector: 'app-index-subscriber',
  templateUrl: './index-subscriber.component.html'
})
export class IndexSubscriberComponent implements OnChanges {

  @Input() config: RequestConfig;
  @Input() errorHandling: RequestErrorHandling;

  request$: Observable<IndexResponse<Mixed>>;
  error$: Observable<any>;

  constructor(
    private readonly httpSubscriberSvc: HttpSubscriberService
  ) { }

  ngOnChanges(): void {
    this.request$ = this.httpSubscriberSvc.getRequest$(this.config) as Observable<IndexResponse<Mixed>>;
    this.error$ = this.httpSubscriberSvc.getError$(this.request$, this.errorHandling);
  }

}
