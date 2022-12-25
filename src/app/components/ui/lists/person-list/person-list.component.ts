import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/features/index/results';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent {

  @Input() list: Person[];

}
