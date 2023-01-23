import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ShowRoutingModule } from "./show.routing.module";
import { ShowResultsService } from "./services/show-results/show-results.service";
import { ShowPageComponent } from "src/app/pages/show-page/show-page.component";
import { ShowResultsComponent } from "./components/show-results.component";
import { ShowDetailsComponent } from "./components/show-details/show-details.component";
import { ShowMediaComponent } from "./components/show-details/show-media/show-media.component";
import { ShowPersonComponent } from "./components/show-details/show-person/show-person.component";
import { ShowRelatedComponent } from "./components/show-details/show-related/show-related.component";
import { ShowMediaInfoListSwitchComponent } from "./components/show-details/show-media/show-media-info-list-switch/show-media-info-list-switch.component";
import { ShowMediaLinksComponent } from "./components/show-details/show-media/show-media-links/show-media-links.component";
import { ShowPersonInfoListComponent } from "./components/show-details/show-person/show-person-info-list/show-person-info-list.component";
import { ShowMovieInfoListComponent } from "./components/show-details/show-media/show-media-info-list-switch/show-movie-info-list/show-movie-info-list.component";
import { ShowTvInfoListComponent } from "./components/show-details/show-media/show-media-info-list-switch/show-tv-info-list/show-tv-info-list.component";
import { ShowRelatedResultsService } from "./services/show-related-results/show-related-results.service";
import { ShowRelatedLinkComponent } from "./components/show-details/show-related/show-related-link/show-related-link.component";

@NgModule({
  declarations: [
    ShowPageComponent,
    ShowResultsComponent,
    ShowDetailsComponent,
    ShowMediaComponent,
    ShowPersonComponent,
    ShowRelatedComponent,
    ShowMediaInfoListSwitchComponent,
    ShowMediaLinksComponent,
    ShowPersonInfoListComponent,
    ShowMovieInfoListComponent,
    ShowTvInfoListComponent,
    ShowRelatedLinkComponent
  ],
  imports: [
    ShowRoutingModule,
    SharedModule
  ],
  providers: [
    ShowResultsService,
    ShowRelatedResultsService
  ]
})
export class ShowModule { }
