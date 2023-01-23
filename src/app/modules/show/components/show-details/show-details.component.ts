import { Component, Input } from '@angular/core';
import { ShowDetails, ShowPage } from 'src/app/models/shared/results';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html'
})
export class ShowDetailsComponent {

  @Input() type: ShowPage;
  @Input() data: ShowDetails;

}
