import { Component, Input, OnInit } from '@angular/core';
import { Credits } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-list-controller',
  templateUrl: './credits-list-controller.component.html',
  styleUrls: ['./credits-list-controller.component.scss']
})
export class CreditsListControllerComponent {

  @Input() credits: Credits;

  showList: 'crew' | 'cast' = 'cast';

}
