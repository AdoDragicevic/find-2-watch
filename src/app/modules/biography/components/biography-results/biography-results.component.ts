import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Media } from 'src/app/models/index/results';
import { BiographyResultsService } from '../../services/biography-results/biography-results.service';

@Component({
  selector: 'app-biography-results',
  templateUrl: './biography-results.component.html',
  styleUrls: ['./biography-results.component.scss']
})
export class BiographyResultsComponent implements OnInit {

  results$: Observable<Media[]>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly biographyResultsSvc: BiographyResultsService
  ) { }

  ngOnInit(): void {
    this.results$ = this.biographyResultsSvc.getResults$(this.route);
    console.log(this.biographyResultsSvc.getResults$(this.route));
  }

}
