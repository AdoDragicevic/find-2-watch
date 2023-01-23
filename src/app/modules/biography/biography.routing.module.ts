import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BiographyPageComponent } from "src/app/pages/biography-page/biography-page.component";

const routes: Routes = [
  {
    path: '',
    component: BiographyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiographyRoutingModule { }
