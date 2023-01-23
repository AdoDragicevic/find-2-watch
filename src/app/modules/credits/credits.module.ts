import { NgModule } from "@angular/core";
import { CreditsPageComponent } from "src/app/pages/credits-page/credits-page.component";
import { SharedModule } from "../shared/shared.module";
import { CreditsCastListComponent } from "./components/credits-results/credits-list-controller/credits-cast-list/credits-cast-list.component";
import { CreditsCrewListComponent } from "./components/credits-results/credits-list-controller/credits-crew-list/credits-crew-list.component";
import { CreditsListControllerComponent } from "./components/credits-results/credits-list-controller/credits-list-controller.component";
import { CreditsPersonInfoComponent } from "./components/credits-results/credits-list-controller/credits-person-info/credits-person-info.component";
import { CreditsResultsComponent } from "./components/credits-results/credits-results.component";
import { CreditsRoutingModule } from "./credits-routing.module";
import { CreditsResultsService } from "./services/credits-results/credits-results.service";

@NgModule({
  declarations: [
    CreditsPageComponent,
    CreditsResultsComponent,
    CreditsListControllerComponent,
    CreditsCastListComponent,
    CreditsCrewListComponent,
    CreditsPersonInfoComponent
  ],
  imports: [
    SharedModule,
    CreditsRoutingModule
  ],
  providers: [
    CreditsResultsService
  ]
})
export class CreditsModule { }
