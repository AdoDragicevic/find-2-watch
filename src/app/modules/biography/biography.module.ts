import { NgModule } from "@angular/core";
import { BiographyPageComponent } from "src/app/pages/biography-page/biography-page.component";
import { SharedModule } from "../shared/shared.module";
import { BiographyRoutingModule } from "./biography.routing.module";
import { BiographyResultsComponent } from './components/biography-results/biography-results.component';
import { BiographyResultsService } from "./services/biography-results/biography-results.service";

@NgModule({
  declarations: [
    BiographyPageComponent,
    BiographyResultsComponent
  ],
  imports: [
    SharedModule,
    BiographyRoutingModule
  ],
  providers: [
    BiographyResultsService
  ]
})
export class BiographyModule { }
