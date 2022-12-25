import { Component, Input } from '@angular/core';
import { MediaType } from 'src/app/models/features/index/results';
import { CreditsRequestConfig, RecommendationsRequestConfig, SimilarRequestConfig } from 'src/app/models/features/shared/http-request';
import { MovieDetails, TvDetails } from 'src/app/models/features/show/results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-media',
  templateUrl: './show-media.component.html',
  styleUrls: ['./show-media.component.scss']
})
export class ShowMediaComponent {

  @Input() media: MovieDetails | TvDetails;

  mediaType = window.location.pathname.substring(1).split('/')[0] as MediaType;

  get title() {
    return this.media.title || this.media.name;
  }

  get posterUrl(): string {
    return `${environment.imgBaseUrl}/${this.media.poster_path}`;
  }

  get recommendationsRequestConfig() {
    return new RecommendationsRequestConfig(this.mediaType, this.media.id.toString());
  }

  get similarRequestConfig() {
    return new SimilarRequestConfig(this.mediaType, this.media.id.toString());
  }

  get castRequestConfig() {
    return new CreditsRequestConfig('credits-cast', this.mediaType, this.media.id.toString())
  }

}
