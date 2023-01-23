import { Component, Input } from '@angular/core';
import { Media } from 'src/app/models/index/results';
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
    return `/show/${mediaType}/${id}`;
  }

  get img(): string {
    return `${environment.imgBaseUrl}/${this.item.poster_path}`;
  }

  get description(): string {
    let { overview } = this.item;
    if (overview.length <= 110) return overview;
    const firstFifteenWords = overview.split(' ').slice(0,15).join(' ');
    return `${firstFifteenWords} ...`;
  }

}
