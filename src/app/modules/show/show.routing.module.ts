import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowPageComponent } from "src/app/pages/show-page/show-page.component";

const routes: Routes = [
  {
    path: '', // person | tv | movie
    component: ShowPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule {

}
