import { Component, Input } from '@angular/core';
import { Cast, Credits, Crew, PersonCredits } from 'src/app/models/features/credits/credits';
import { IndexResponse, Media } from 'src/app/models/features/index/results';
import { CreditsRequestConfig, PersonCreditsRequestConfig, RecommendationsRequestConfig, SimilarRequestConfig } from 'src/app/models/features/shared/http-request';

@Component({
  selector: 'app-show-related-results',
  templateUrl: './show-related-results.component.html',
  styleUrls: ['./show-related-results.component.scss']
})
export class ShowRelatedResultsComponent {

  @Input() response: IndexResponse<Media> | Credits | PersonCredits;
  @Input() requestConfig:
    RecommendationsRequestConfig |
    SimilarRequestConfig |
    CreditsRequestConfig |
    PersonCreditsRequestConfig;

  get list(): (Media | Cast | Crew)[] {
    switch (this.requestConfig.name) {
      case 'credits-cast':
      case 'person-credits-cast':
        return (this.response as Credits | PersonCredits).cast.slice(0,8);
      case 'credits-crew':
      case 'person-credits-crew':
        return (this.response as Credits | PersonCredits).crew.slice(0,8);
      default:
        return (this.response as IndexResponse<Media>).results.slice(0,8);
    }
  }

  get seeMoreUrl() {

    return `/`;
  }

}
