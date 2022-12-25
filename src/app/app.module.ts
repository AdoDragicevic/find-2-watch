import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageLayoutComponent } from './components/layout/page/main-page-layout/main-page-layout.component';
import { NavMainComponent } from './components/layout/nav/nav-main/nav-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavPagesComponent } from './components/layout/nav/nav-pages/nav-pages.component';
import { NavContainerComponent } from './components/layout/nav/nav-container/nav-container.component';
import { PaginationComponent } from './components/ui/pagination/pagination.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ReplaceAllPipe } from './pipes/replace-all.pipe';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoComponent } from './components/ui/logo/logo.component';
import { OverviewCardComponent } from './components/ui/overview-card/overview-card.component';
import { CommonModule } from '@angular/common';
import { MediaListComponent } from './components/ui/lists/media-list/media-list.component';
import { MediaItemComponent } from './components/ui/lists/media-list/media-item/media-item.component';
import { PersonListComponent } from './components/ui/lists/person-list/person-list.component';
import { PersonItemComponent } from './components/ui/lists/person-list/person-item/person-item.component';
import { CastListComponent } from './components/ui/lists/cast-list/cast-list.component';
import { CastItemComponent } from './components/ui/lists/cast-list/cast-item/cast-item.component';
import { MixedListComponent } from './components/ui/lists/mixed-list/mixed-list.component';
import { MediaGenresComponent } from './components/ui/lists/media-list/media-item/media-genres/media-genres.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { IndexComponent } from './components/features/index/index.component';
import { IndexFiltersComponent } from './components/features/index/index-filters/index-filters.component';
import { IndexSearchBarComponent } from './components/features/index/index-filters/index-search-bar/index-search-bar.component';
import { IndexSubscriberComponent } from './components/features/index/index-subscriber/index-subscriber.component';
import { IndexResponseComponent } from './components/features/index/index-subscriber/index-response/index-response.component';
import { SwitchListComponent } from './components/ui/lists/switch-list/switch-list.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';
import { ShowSubscriberComponent } from './components/features/show/show-subscriber/show-subscriber.component';
import { ShowResponseComponent } from './components/features/show/show-subscriber/show-response/show-response.component';
import { ShowPersonComponent } from './components/features/show/show-subscriber/show-response/show-person/show-person.component';
import { ShowMediaComponent } from './components/features/show/show-subscriber/show-response/show-media/show-media.component';
import { ShowPersonInfoListComponent } from './components/features/show/show-subscriber/show-response/show-person/show-person-info-list/show-person-info-list.component';
import { ShowMediaInfoListSwitchComponent } from './components/features/show/show-subscriber/show-response/show-media/show-media-info-list-switch/show-media-info-list-switch.component';
import { ShowTvInfoListComponent } from './components/features/show/show-subscriber/show-response/show-media/show-media-info-list-switch/show-tv-info-list/show-tv-info-list.component';
import { ShowMovieInfoListComponent } from './components/features/show/show-subscriber/show-response/show-media/show-media-info-list-switch/show-movie-info-list/show-movie-info-list.component';
import { ShowRelatedSubscriberComponent } from './components/features/show/show-subscriber/show-response/show-related-subscriber/show-related-subscriber.component';
import { ShowRelatedResultsComponent } from './components/features/show/show-subscriber/show-response/show-related-subscriber/show-related-results/show-related-results.component';
import { ShowMediaLinksComponent } from './components/features/show/show-subscriber/show-response/show-media/show-media-links/show-media-links.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { CreditsSubscriberComponent } from './components/features/credits/credits-subscriber/credits-subscriber.component';
import { CreditsListControllerComponent } from './components/features/credits/credits-subscriber/credits-list-controller/credits-list-controller.component';
import { CreditsCrewListComponent } from './components/features/credits/credits-subscriber/credits-list-controller/credits-crew-list/credits-crew-list.component';
import { CreditsCastListComponent } from './components/features/credits/credits-subscriber/credits-list-controller/credits-cast-list/credits-cast-list.component';
import { CreditsPersonInfoComponent } from './components/features/credits/credits-subscriber/credits-list-controller/credits-person-info/credits-person-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageLayoutComponent,
    NavMainComponent,
    NavPagesComponent,
    NavContainerComponent,
    PaginationComponent,
    ErrorPageComponent,
    ReplaceAllPipe,
    LoadingSpinnerComponent,
    PageNotFoundComponent,
    LogoComponent,
    OverviewCardComponent,
    PaginationComponent,
    MediaListComponent,
    MediaItemComponent,
    PersonListComponent,
    PersonItemComponent,
    CastListComponent,
    CastItemComponent,
    MixedListComponent,
    MediaGenresComponent,
    IndexPageComponent,
    IndexComponent,
    IndexFiltersComponent,
    IndexSearchBarComponent,
    IndexSubscriberComponent,
    IndexResponseComponent,
    SwitchListComponent,
    ShowPageComponent,
    ShowSubscriberComponent,
    ShowResponseComponent,
    ShowPersonComponent,
    ShowMediaComponent,
    ShowPersonInfoListComponent,
    ShowMediaInfoListSwitchComponent,
    ShowTvInfoListComponent,
    ShowMovieInfoListComponent,
    ShowRelatedSubscriberComponent,
    ShowRelatedResultsComponent,
    ShowMediaLinksComponent,
    CreditsPageComponent,
    CreditsSubscriberComponent,
    CreditsCrewListComponent,
    CreditsCastListComponent,
    CreditsListControllerComponent,
    CreditsPersonInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
