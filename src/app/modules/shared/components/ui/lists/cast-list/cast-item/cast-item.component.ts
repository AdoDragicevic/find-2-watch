import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/credits/credits';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.scss']
})
export class CastItemComponent {

  @Input() item: Cast;

  get link(): string {
    return `/show/person/${this.item.id}`;
  }

  get img(): string {
    return `${environment.imgBaseUrl}/${this.item.profile_path}`;
  }

}
