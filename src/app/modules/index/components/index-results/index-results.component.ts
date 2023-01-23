import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IndexResults } from 'src/app/models/index/results';
import { IndexResultsService } from '../../services/index-results/index-results.service';

@Component({
  selector: 'app-index-results',
  templateUrl: './index-results.component.html'
})
export class IndexResultsComponent {

  results$: Observable<IndexResults>;

  constructor (
    private readonly route: ActivatedRoute,
    private readonly indexResultsSvc: IndexResultsService
  ) { }

  ngOnInit(): void {
    this.results$ = this.indexResultsSvc.getResults$(this.route);
  }

}
