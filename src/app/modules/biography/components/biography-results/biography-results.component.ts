import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiographyResultsService } from '../../services/biography-results/biography-results.service';

@Component({
  selector: 'app-biography-results',
  templateUrl: './biography-results.component.html'
})
export class BiographyResultsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly biographyResultsSvc = inject(BiographyResultsService);

  results$ = this.biographyResultsSvc.getResults$(this.route);

}
