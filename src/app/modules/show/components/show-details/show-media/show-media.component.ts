import { Component, Input } from '@angular/core';
import { MediaType } from 'src/app/models/index/results';
import { CreditsRequestConfig, RecommendationsRequestConfig, SimilarRequestConfig } from 'src/app/models/shared/http-request';
import { MovieDetails, TvDetails } from 'src/app/models/shared/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-media',
  templateUrl: './show-media.component.html',
  styleUrls: ['./show-media.component.scss']
})
export class ShowMediaComponent {

  @Input() media: MovieDetails | TvDetails;
  @Input() mediaType: MediaType;

  get title() {
    return this.media.title || this.media.name;
  }

  get posterUrl(): string {
    return `${environment.imgBaseUrl}/${this.media.poster_path}`;
  }

}
