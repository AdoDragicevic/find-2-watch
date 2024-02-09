import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowResultsService } from '../services/show-results/show-results.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html'
})
export class ShowResultsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly showResultsSvc = inject(ShowResultsService);

  results$ = this.showResultsSvc.getResults$(this.route);

}
