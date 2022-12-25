import { Component, Input } from '@angular/core';
import { Cast, Crew } from 'src/app/models/features/credits/credits';
import { IndexPage, Media, Person } from 'src/app/models/features/index/results';

@Component({
  selector: 'app-switch-list',
  templateUrl: './switch-list.component.html'
})
export class SwitchListComponent {

  @Input() list: (Media | Person | Cast | Crew)[];

  @Input() type: 'person' | 'credits-cast' | string;

}
