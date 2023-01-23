import { Component, Input } from '@angular/core';
import { Cast, Crew } from 'src/app/models/credits/credits';
import { Media, Person } from 'src/app/models/index/results';

@Component({
  selector: 'app-switch-list',
  templateUrl: './switch-list.component.html'
})
export class SwitchListComponent {

  @Input() list: (Media | Person | Cast | Crew)[];
  @Input() type: 'search' | 'trending' | 'person' | 'credits' | string;

}
