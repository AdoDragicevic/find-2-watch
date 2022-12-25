import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credits } from 'src/app/models/features/credits/credits';
import { IndexResponse, Media } from 'src/app/models/features/index/results';
import { RequestConfig, RequestErrorHandling } from 'src/app/models/features/shared/http-request';
import { HttpSubscriberService } from 'src/app/services/http-subscriber/http-subscriber.service';

@Component({
  selector: 'app-show-related-subscriber',
  templateUrl: './show-related-subscriber.component.html',
  styleUrls: ['./show-related-subscriber.component.scss']
})
export class ShowRelatedSubscriberComponent implements OnInit {

  @Input() requestConfig: RequestConfig;

  request$: Observable<IndexResponse<Media> | Credits>;
  error$: Observable<any>;

  constructor (
    private httpSubscriberSvc: HttpSubscriberService
  ) { }

  ngOnInit(): void {
    this.request$ =
      this.httpSubscriberSvc.getRequest$(this.requestConfig) as Observable<IndexResponse<Media> | Credits>;
    this.error$ =
      this.httpSubscriberSvc.getError$(this.request$, RequestErrorHandling.MESSAGE);
  }

}
