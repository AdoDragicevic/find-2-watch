import { Component, Input, OnInit } from '@angular/core';
import { MediaType } from 'src/app/models/index/results';
import { ShowRelatedType } from 'src/app/models/show/show';
import { ShowRelatedResultsService } from 'src/app/modules/show/services/show-related-results/show-related-results.service';

@Component({
  selector: 'app-show-related-link',
  templateUrl: './show-related-link.component.html',
  styleUrls: ['./show-related-link.component.scss']
})
export class ShowRelatedLinkComponent implements OnInit {

  @Input() relatedType: ShowRelatedType;
  @Input() mediaType: MediaType;
  @Input() id: string;

  url = '/';

  constructor(
    private readonly showRelatedResultsSvc: ShowRelatedResultsService
  ) { }

  ngOnInit(): void {
    const { relatedType, mediaType, id } = this;
    this.url = this.showRelatedResultsSvc.getLink(relatedType, mediaType, id);
  }

}
