import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditsType } from 'src/app/models/credits/credits';

@Component({
  selector: 'app-credits-btns',
  templateUrl: './credits-btns.component.html',
  styleUrls: ['./credits-btns.component.scss']
})
export class CreditsBtnsComponent {

  @Input() creditsType: CreditsType;
  
  @Output() typeChange = new EventEmitter<CreditsType>();

  onBtnClick(type: CreditsType) {
    if (this.creditsType === type) return;
    this.typeChange.emit(type);
  }

}
