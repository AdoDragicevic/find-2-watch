import { Component, Input } from '@angular/core';
import { ShowResults } from 'src/app/models/show/results';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html'
})
export class ShowDetailsComponent {

  @Input() details: ShowResults;

}
