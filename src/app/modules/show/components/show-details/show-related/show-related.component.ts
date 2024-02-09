import { Component, Input, OnInit, inject } from '@angular/core';
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

  private readonly route = inject(ActivatedRoute);
  private readonly showRelatedResultsSvc = inject(ShowRelatedResultsService);

  ngOnInit() {
    const { type, id } = this.route.snapshot.params;
    this.results$ = this.showRelatedResultsSvc.getResults$(this.type, type, id);
  }

}
