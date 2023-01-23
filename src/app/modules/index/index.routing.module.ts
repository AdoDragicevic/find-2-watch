import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexPageComponent } from "src/app/pages/index-page/index-page.component";

const routes: Routes = [
  {
    path: '', // trending, search, movie, tv, person
    component: IndexPageComponent
  },
  {
    path: ':mediaType/:id', // similar, recommendations
    component: IndexPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
