import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Credits } from 'src/app/models/features/credits/credits';
import { CreditsRequestConfig, RequestErrorHandling } from 'src/app/models/features/shared/http-request';
import { HttpSubscriberService } from 'src/app/services/http-subscriber/http-subscriber.service';

@Component({
  selector: 'app-credits-subscriber',
  templateUrl: './credits-subscriber.component.html'
})
export class CreditsSubscriberComponent implements OnInit {

  request$: Observable<Credits>;
  error$: Observable<any>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpSubscriberSvc: HttpSubscriberService
  ) { }

  ngOnInit(): void {
    const { mediaType, id } = this.route.snapshot.params;
    const config = new CreditsRequestConfig('credits-crew', mediaType, id);
    this.request$ = this.httpSubscriberSvc.getRequest$(config) as Observable<Credits>;
    this.error$ = this.httpSubscriberSvc.getError$(this.request$, RequestErrorHandling.MESSAGE);
  }

}
