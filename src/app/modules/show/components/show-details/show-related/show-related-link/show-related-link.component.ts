import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowRelatedType } from 'src/app/models/show/show';
import { ShowRelatedResultsService } from 'src/app/modules/show/services/show-related-results/show-related-results.service';

@Component({
  selector: 'app-show-related-link',
  templateUrl: './show-related-link.component.html',
  styleUrls: ['./show-related-link.component.scss']
})
export class ShowRelatedLinkComponent implements OnInit {

  @Input() relatedType: ShowRelatedType;

  url = '/';

  private readonly showRelatedResultsSvc = inject(ShowRelatedResultsService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const { type, id } = this.route.snapshot.params;
    this.url = this.showRelatedResultsSvc.getLink(this.relatedType, type, id);
  }

}
