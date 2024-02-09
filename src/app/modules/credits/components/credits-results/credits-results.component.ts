import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditsResultsService } from '../../services/credits-results/credits-results.service';

@Component({
  selector: 'app-credits-results',
  templateUrl: './credits-results.component.html'
})
export class CreditsResultsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly creditsResultsSvc = inject(CreditsResultsService);

  results$ = this.creditsResultsSvc.getResults$(this.route);

}
