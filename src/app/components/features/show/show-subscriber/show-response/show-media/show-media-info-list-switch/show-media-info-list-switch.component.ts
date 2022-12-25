import { Component, Input } from '@angular/core';
import { MediaType } from 'src/app/models/features/index/results';
import { MovieDetails, ShowPage, TvDetails } from 'src/app/models/features/show/results';

@Component({
  selector: 'app-show-media-info-list-switch',
  templateUrl: './show-media-info-list-switch.component.html'
})
export class ShowMediaInfoListSwitchComponent {

  @Input() media: MovieDetails | TvDetails;

  type = window.location.pathname.substring(1).split('/')[0] as MediaType;

}
