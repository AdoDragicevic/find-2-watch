import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/index/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html'
})
export class PersonItemComponent {

  @Input() item: Person;

  get link(): string {
    return `/show/person/${this.item.id}`;
  }

  get img(): string {
    return `${environment.imgBaseUrl}/${this.item.profile_path}`;
  }

}
