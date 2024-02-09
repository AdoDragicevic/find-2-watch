import { Component, Input } from '@angular/core';
import { ShowRelatedResults } from 'src/app/models/show/results';
import { ShowRelatedType } from 'src/app/models/show/show';

@Component({
  selector: 'app-show-related-list',
  templateUrl: './show-related-list.component.html'
})
export class ShowRelatedListComponent {

  @Input() results: ShowRelatedResults;
  @Input() relatedType: ShowRelatedType;

  get isEmpty(): boolean {
    return this.results.data.length === 0;
  }

}
