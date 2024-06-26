import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexPage } from 'src/app/models/index/results';

@Component({
  selector: 'app-nav-pages',
  templateUrl: './nav-pages.component.html',
  styleUrls: ['./nav-pages.component.scss']
})
export class NavPagesComponent {

  private readonly route = inject(ActivatedRoute);

  get activePage(): IndexPage {
    return this.route.snapshot.params['type'];
  }

}
