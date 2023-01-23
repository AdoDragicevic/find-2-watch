import { Component, Input } from '@angular/core';
import { MediaType } from 'src/app/models/index/results';
import { MovieDetails, TvDetails } from 'src/app/models/shared/results';

@Component({
  selector: 'app-show-media-info-list-switch',
  templateUrl: './show-media-info-list-switch.component.html'
})
export class ShowMediaInfoListSwitchComponent {

  @Input() media: MovieDetails | TvDetails;
  @Input() mediaType: MediaType;

}
