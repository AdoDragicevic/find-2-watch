import { NgModule } from "@angular/core";
import { IndexPageComponent } from "../../pages/index-page/index-page.component";
import { SharedModule } from "../shared/shared.module";
import { IndexFiltersComponent } from "./components/index-filters/index-filters.component";
import { IndexSearchBarComponent } from "./components/index-filters/index-search-bar/index-search-bar.component";
import { IndexListComponent } from "./components/index-results/index-list/index-list.component";
import { IndexResultsComponent } from "./components/index-results/index-results.component";
import { IndexComponent } from "./components/index.component";
import { IndexRoutingModule } from "./index.routing.module";
import { IndexResultsService } from "./services/index-results/index-results.service";
import { IndexFiltersService } from "./services/index-filters/index-filters.service";
import { IndexAppliedFiltersService } from "./services/index-filters/index-applied-filters/index-applied-filters.service";
import { ALL_FILTERS, allFilters } from "src/app/data/filters";

@NgModule({
  declarations: [
    IndexPageComponent,
    IndexComponent,
    IndexFiltersComponent,
    IndexSearchBarComponent,
    IndexResultsComponent,
    IndexListComponent
  ],
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  providers: [
    IndexResultsService,
    IndexFiltersService,
    IndexAppliedFiltersService,
    { provide: ALL_FILTERS, useValue: allFilters }
  ]
})
export class IndexModule { }
