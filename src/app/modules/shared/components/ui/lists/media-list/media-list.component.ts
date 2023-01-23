import { Component, Input } from '@angular/core';
import { Media } from 'src/app/models/index/results';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html'
})
export class MediaListComponent {

  @Input() list: Media[];
  @Input() isShowOnlyTitle = false;

}
