import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  },
  {
    path: 'trending',
    component: IndexPageComponent
  },
  {
    path: 'search',
    component: IndexPageComponent
  },
  {
    path: 'movie',
    component: IndexPageComponent
  },
  {
    path: 'movie/:id',
    component: ShowPageComponent
  },
  {
    path: 'tv',
    component: IndexPageComponent
  },
  {
    path: 'tv/:id',
    component: ShowPageComponent
  },
  {
    path: 'person',
    component: IndexPageComponent
  },
  {
    path: 'person/:id',
    component: ShowPageComponent
  },
  {
    path: 'recommendations/:mediaType/:id',
    component: IndexPageComponent
  },
  {
    path: 'similar/:mediaType/:id',
    component: IndexPageComponent
  },
  {
    path: 'credits/:mediaType/:id',
    component: CreditsPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
