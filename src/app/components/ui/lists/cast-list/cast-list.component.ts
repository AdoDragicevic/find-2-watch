import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/features/credits/credits';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html'
})
export class CastListComponent {

  @Input() list: Cast[];

}
