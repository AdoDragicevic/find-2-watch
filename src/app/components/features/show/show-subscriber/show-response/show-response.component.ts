import { Component, Input } from '@angular/core';
import { ShowDetails, ShowPage } from 'src/app/models/features/show/results';

@Component({
  selector: 'app-show-response',
  templateUrl: './show-response.component.html'
})
export class ShowResponseComponent {

  @Input() response: ShowDetails;
  @Input() type: ShowPage;

}
