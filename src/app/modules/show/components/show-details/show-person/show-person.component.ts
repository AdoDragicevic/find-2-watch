import { Component, Input } from '@angular/core';
import { BiographyRequestConfig } from 'src/app/models/shared/http-request';
import { PersonDetails } from 'src/app/models/shared/results';
import { environment } from 'src/environments/environment';
import { MediaType } from 'src/app/models/index/results';

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
