import { Component, Input } from '@angular/core';
import { Media } from 'src/app/models/features/index/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html'
})
export class MediaItemComponent {

  @Input() item: Media;
  @Input() isShowOnlyTitle: boolean;

  get title(): string {
    return this.item.name || this.item.title;
  }

  get link(): string {
    const { id } = this.item;
    const mediaType = 'first_air_date' in this.item ? 'tv' : 'movie';
    return `/${mediaType}/${id}`;
  }

  get img(): string {
    return `${environment.imgBaseUrl}/${this.item.poster_path}`;
  }

  get description(): string {
    return this.item.overview;
  }

}
