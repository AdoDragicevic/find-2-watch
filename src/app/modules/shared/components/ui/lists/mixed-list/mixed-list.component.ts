import { Component, Input } from '@angular/core';
import { Mixed } from 'src/app/models/index/results';

@Component({
  selector: 'app-mixed-list',
  templateUrl: './mixed-list.component.html'
})
export class MixedListComponent {

  @Input() list: Mixed[];

  isPerson(item: Mixed) {
    return !!(item['known_for_department']);
  }

}
