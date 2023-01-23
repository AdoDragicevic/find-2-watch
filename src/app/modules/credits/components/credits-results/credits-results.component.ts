import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Credits } from 'src/app/models/credits/credits';
import { CreditsResultsService } from '../../services/credits-results/credits-results.service';

@Component({
  selector: 'app-credits-results',
  templateUrl: './credits-results.component.html'
})
export class CreditsResultsComponent implements OnInit {

  results$: Observable<Credits>;

  constructor (
    private readonly route: ActivatedRoute,
    private readonly creditsResultsSvc: CreditsResultsService
  ) { }

  ngOnInit(): void {
    this.results$ = this.creditsResultsSvc.getResults$(this.route);
  }

}
