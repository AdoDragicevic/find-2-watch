import { Component, Input } from '@angular/core';
import { PersonCreditsRequestConfig } from 'src/app/models/features/shared/http-request';
import { PersonDetails } from 'src/app/models/features/show/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.scss']
})
export class ShowPersonComponent {

  @Input() person: PersonDetails;

  get imgUrl() {
    return `${environment.imgBaseUrl}/${this.person.profile_path}`;
  }

  get staredInMoviesConfig() {
    return new PersonCreditsRequestConfig(
      'person-credits-cast',
      'movie',
      this.person.id.toString()
    );
  }

  get staredInShowsConfig() {
    return new PersonCreditsRequestConfig(
      'person-credits-cast',
      'tv',
      this.person.id.toString()
    );
  }

}
