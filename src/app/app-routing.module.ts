import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index/trending',
    pathMatch: 'full'
  },
  {
    path: 'index/:type',
    loadChildren: () => (
      import('./modules/index/index.module')
      .then(m => m.IndexModule)
    )
  },
  {
    path: 'show/:type/:id',
    loadChildren: () => (
      import('./modules/show/show.module')
      .then(m => m.ShowModule)
    )
  },
  {
    path: 'credits/:type/:id',
    loadChildren: () => (
      import('./modules/credits/credits.module')
      .then(m => m.CreditsModule)
    )
  },
  {
    path: 'biography/:type/:id',
    loadChildren: () => (
      import('./modules/biography/biography.module')
      .then(m => m.BiographyModule)
    )
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
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
