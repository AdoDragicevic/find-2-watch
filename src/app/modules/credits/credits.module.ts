import { NgModule } from "@angular/core";
import { CreditsPageComponent } from "src/app/pages/credits-page/credits-page.component";
import { SharedModule } from "../shared/shared.module";
import { CreditsListControllerComponent } from "./components/credits-results/credits-list-controller/credits-list-controller.component";
import { CreditsPersonInfoComponent } from "./components/credits-results/credits-list-controller/credits-person-info/credits-person-info.component";
import { CreditsResultsComponent } from "./components/credits-results/credits-results.component";
import { CreditsRoutingModule } from "./credits-routing.module";
import { CreditsResultsService } from "./services/credits-results/credits-results.service";
import { CreditsListComponent } from './components/credits-results/credits-list-controller/credits-list/credits-list.component';
import { CreditsBtnsComponent } from './components/credits-results/credits-list-controller/credits-btns/credits-btns.component';

@NgModule({
  declarations: [
    CreditsPageComponent,
    CreditsResultsComponent,
    CreditsListControllerComponent,
    CreditsPersonInfoComponent,
    CreditsListComponent,
    CreditsBtnsComponent
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
