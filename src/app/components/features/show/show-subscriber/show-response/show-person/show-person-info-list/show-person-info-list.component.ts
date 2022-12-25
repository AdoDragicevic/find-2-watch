import { Component, Input, OnInit } from '@angular/core';
import { PersonDetails } from 'src/app/models/features/show/results';

@Component({
  selector: 'app-show-person-info-list',
  templateUrl: './show-person-info-list.component.html'
})
export class ShowPersonInfoListComponent {

  @Input() person: PersonDetails;

  get imdbUrl(): string {
    return `https://www.imdb.com/name/${this.person.imdb_id}`;
  }

}
