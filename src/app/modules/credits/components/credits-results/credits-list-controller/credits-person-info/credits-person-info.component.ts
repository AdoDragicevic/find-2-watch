import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credits-person-info',
  templateUrl: './credits-person-info.component.html',
  styleUrls: ['./credits-person-info.component.scss']
})
export class CreditsPersonInfoComponent {

  @Input() name: string;
  @Input() role: string;
  @Input() profileUrl: string;

}
