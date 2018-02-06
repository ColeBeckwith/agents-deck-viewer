import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(public router: Router) {

	}

}
