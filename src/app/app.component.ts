import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';

const { key } = environment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { }
