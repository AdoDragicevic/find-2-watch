import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NavContainerComponent } from "src/app/modules/shared/components/layout/nav/nav-container/nav-container.component";
import { NavMainComponent } from "src/app/modules/shared/components/layout/nav/nav-main/nav-main.component";
import { NavPagesComponent } from "src/app/modules/shared/components/layout/nav/nav-pages/nav-pages.component";
import { CastItemComponent } from "src/app/modules/shared/components/ui/lists/cast-list/cast-item/cast-item.component";
import { CastListComponent } from "src/app/modules/shared/components/ui/lists/cast-list/cast-list.component";
import { MediaGenresComponent } from "src/app/modules/shared/components/ui/lists/media-list/media-item/media-genres/media-genres.component";
import { MediaItemComponent } from "src/app/modules/shared/components/ui/lists/media-list/media-item/media-item.component";
import { MediaListComponent } from "src/app/modules/shared/components/ui/lists/media-list/media-list.component";
import { MixedListComponent } from "src/app/modules/shared/components/ui/lists/mixed-list/mixed-list.component";
import { PersonItemComponent } from "src/app/modules/shared/components/ui/lists/person-list/person-item/person-item.component";
import { PersonListComponent } from "src/app/modules/shared/components/ui/lists/person-list/person-list.component";
import { SwitchListComponent } from "src/app/modules/shared/components/ui/lists/switch-list/switch-list.component";
import { ReplaceAllPipe } from "src/app/pipes/replace-all.pipe";
import { MainPageLayoutComponent } from "./components/layout/page/main-page-layout/main-page-layout.component";
import { FiltersListComponent } from "./components/ui/filters/filters-list/filters-list.component";
import { FiltersComponent } from "./components/ui/filters/filters.component";
import { LoadingSpinnerComponent } from "./components/ui/loading-spinner/loading-spinner.component";
import { LogoComponent } from "./components/ui/logo/logo.component";
import { OverviewCardComponent } from "./components/ui/overview-card/overview-card.component";
import { PaginationComponent } from "./components/ui/pagination/pagination.component";

@NgModule({
  declarations: [
    MainPageLayoutComponent,
    NavMainComponent,
    NavPagesComponent,
    NavContainerComponent,
    ReplaceAllPipe,
    MediaListComponent,
    MediaItemComponent,
    PersonListComponent,
    PersonItemComponent,
    CastListComponent,
    CastItemComponent,
    MixedListComponent,
    MediaGenresComponent,
    SwitchListComponent,
    FiltersComponent,
    FiltersListComponent,
    OverviewCardComponent,
    LogoComponent,
    LoadingSpinnerComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MainPageLayoutComponent,
    NavMainComponent,
    NavPagesComponent,
    NavContainerComponent,
    ReplaceAllPipe,
    MediaListComponent,
    MediaItemComponent,
    PersonListComponent,
    PersonItemComponent,
    CastListComponent,
    CastItemComponent,
    MixedListComponent,
    MediaGenresComponent,
    SwitchListComponent,
    FiltersComponent,
    FiltersListComponent,
    OverviewCardComponent,
    LogoComponent,
    LoadingSpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
