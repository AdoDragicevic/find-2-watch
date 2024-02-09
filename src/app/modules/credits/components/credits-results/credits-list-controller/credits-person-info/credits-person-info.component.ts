import { Component, Input } from '@angular/core';
import { Cast, Crew } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-person-info',
  templateUrl: './credits-person-info.component.html',
  styleUrls: ['./credits-person-info.component.scss']
})
export class CreditsPersonInfoComponent {

  @Input() person: Crew | Cast;

  get name(): string {
    return this.person.name;
  }

  get role(): string {
    const { character } = <Cast>this.person;
    const { job, department } = <Crew>this.person;
    return character || job || department || 'undefined';
  }

  get profileUrl(): string {
    return `/show/person/${this.person.id}`;
  }

}
