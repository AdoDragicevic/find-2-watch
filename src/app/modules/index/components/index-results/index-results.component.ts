import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexResultsService } from '../../services/index-results/index-results.service';

@Component({
  selector: 'app-index-results',
  templateUrl: './index-results.component.html'
})
export class IndexResultsComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly indexResultsSvc = inject(IndexResultsService);

  public results$ = this.indexResultsSvc.getResults$(this.route);

}
