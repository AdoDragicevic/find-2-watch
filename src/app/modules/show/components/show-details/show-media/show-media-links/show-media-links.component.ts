import { Component, Input } from '@angular/core';
import { MovieDetails, TvDetails } from 'src/app/models/shared/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-media-links',
  templateUrl: './show-media-links.component.html',
  styleUrls: ['./show-media-links.component.scss']
})
export class ShowMediaLinksComponent {

  @Input() media: TvDetails | MovieDetails;

  get title(): string {
    return this.media.title || this.media.name;
  }

  get imdbUrl(): string | null  {
    if ('imdb_id' in this.media) {
      return `https://www.imdb.com/title/${this.media.imdb_id}`;
    }
    return null;
  }

  get youtubeUrl(): string {
    const media = this.title.split(' ').join('+');
    return `https://www.youtube.com/results?search_query=${media}+trailer`;
  }

  get posterUrl(): string {
    return `${environment.imgBaseUrl}/${this.media.poster_path}`;
  }

}
