import { Component, Input } from '@angular/core';
import { PersonDetails } from 'src/app/models/shared/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.scss']
})
export class ShowPersonComponent {

  @Input() person: PersonDetails;

  get imgUrl(): string {
    return `${environment.imgBaseUrl}/${this.person.profile_path}`;
  }

}
