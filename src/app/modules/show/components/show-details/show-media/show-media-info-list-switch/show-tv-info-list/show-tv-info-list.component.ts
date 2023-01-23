import { Component, Input, OnInit } from '@angular/core';
import { TvDetails } from 'src/app/models/shared/results';

@Component({
  selector: 'app-show-tv-info-list',
  templateUrl: './show-tv-info-list.component.html'
})
export class ShowTvInfoListComponent {

  @Input() tv: TvDetails;

  get createdBy(): { name: string, url: string }[] {
    return this.tv.created_by.map(({ name, id }) => (
      { name, url: `/show/person/${id}` }
    ));
  }

  get genres(): string {
    return this.tv.genres?.map(genre => genre.name).join(', ');
  }

  get network(): string {
    return this.tv.networks.map(network => network.name).join(', ');
  }

}
