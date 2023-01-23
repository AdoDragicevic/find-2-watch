import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowRelatedResults } from 'src/app/models/show/results';
import { ShowRelatedType } from 'src/app/models/show/show';
import { ShowRelatedResultsService } from '../../../services/show-related-results/show-related-results.service';

@Component({
  selector: 'app-show-related',
  templateUrl: './show-related.component.html'
})
export class ShowRelatedComponent implements OnInit {

  @Input() type: ShowRelatedType;

  results$: Observable<ShowRelatedResults>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly showRelatedResultsSvc: ShowRelatedResultsService
  ) { }

  ngOnInit(): void {
    const { type, id } = this.route.snapshot.params;
    this.results$ = this.showRelatedResultsSvc.getResults$(this.type, type, id);
  }

  get mediaType(): string {
    return this.route.snapshot.params['type'];
  }

  get id(): string {
    return this.route.snapshot.params['id'];
  }

}
