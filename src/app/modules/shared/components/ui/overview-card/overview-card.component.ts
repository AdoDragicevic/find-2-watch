import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent {

  @Input() href: string;
  @Input() imgUrl: string;
  @Input() imgAlt: string;

  isImgLoaded = true;

}
