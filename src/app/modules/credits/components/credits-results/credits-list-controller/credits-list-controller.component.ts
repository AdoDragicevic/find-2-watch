import { Component, Input } from '@angular/core';
import { Cast, Credits, CreditsType, Crew } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-list-controller',
  templateUrl: './credits-list-controller.component.html',
  styleUrls: ['./credits-list-controller.component.scss']
})
export class CreditsListControllerComponent {

  @Input() credits: Credits;

  creditsType: CreditsType = 'cast';

  get list(): (Cast | Crew)[] {
    const { cast, crew } = this.credits;
    return this.creditsType === 'cast' ? cast : crew;
  }

}
