import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowRequestConfig } from 'src/app/models/features/shared/http-request';

@Injectable({
  providedIn: 'root'
})
export class ShowRequestConfigService {

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  getConfig() {

    console.log(window.location)

  }

}
