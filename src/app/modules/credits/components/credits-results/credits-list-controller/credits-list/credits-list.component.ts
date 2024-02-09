import { Component, Input } from '@angular/core';
import { Cast, Crew } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-list',
  templateUrl: './credits-list.component.html'
})
export class CreditsListComponent {

  @Input() list: (Crew | Cast)[];

}
