import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/models/features/credits/credits';

@Component({
  selector: 'app-credits-cast-list',
  templateUrl: './credits-cast-list.component.html'
})
export class CreditsCastListComponent {

  @Input() cast: Cast[];

  ngOnInit() {
    console.log(this.cast)
  }

}
