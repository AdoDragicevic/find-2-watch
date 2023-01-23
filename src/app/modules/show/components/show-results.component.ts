import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowResults } from 'src/app/models/show/results';
import { ShowResultsService } from '../services/show-results/show-results.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html'
})
export class ShowResultsComponent implements OnInit {

  results$: Observable<ShowResults>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly showResultsSvc: ShowResultsService
  ) { }

  ngOnInit(): void {
    this.results$ = this.showResultsSvc.getResults$(this.route);
  }

}
