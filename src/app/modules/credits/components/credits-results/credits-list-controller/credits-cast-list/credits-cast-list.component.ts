import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-cast-list',
  templateUrl: './credits-cast-list.component.html'
})
export class CreditsCastListComponent {

  @Input() cast: Cast[];

}
