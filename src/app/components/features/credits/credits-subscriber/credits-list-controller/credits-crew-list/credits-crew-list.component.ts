import { Component, Input } from '@angular/core';
import { Crew } from 'src/app/models/features/credits/credits';

@Component({
  selector: 'app-credits-crew-list',
  templateUrl: './credits-crew-list.component.html'
})
export class CreditsCrewListComponent {

  @Input() crew: Crew[];

}
