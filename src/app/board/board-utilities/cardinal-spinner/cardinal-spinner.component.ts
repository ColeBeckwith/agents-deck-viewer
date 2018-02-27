import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'agt-cardinal-spinner',
	templateUrl: './cardinal-spinner.component.html',
	styleUrls: ['./cardinal-spinner.component.scss']
})
export class CardinalSpinnerComponent implements OnInit {
	directions = ['N', 'E', 'S', 'W'];
	currentDirection = 'N';

	constructor() {
	}

	ngOnInit() {
	}

	spin() {
		this.currentDirection = this.directions[Math.floor(Math.random() * 4)];
	}
}
