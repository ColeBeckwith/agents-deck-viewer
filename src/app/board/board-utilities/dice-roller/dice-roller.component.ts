import { Component, HostListener, OnInit } from '@angular/core';

const stringNumbersMap = ['one', 'two', 'three', 'four', 'five', 'six'];

@Component({
	selector: 'agt-dice-roller',
	templateUrl: './dice-roller.component.html',
	styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
	roll: string;
	showText: boolean;

	constructor() {
	}

	ngOnInit() {
		this.roll = 'one';
	}

	@HostListener('click') rollDice() {
		this.roll = stringNumbersMap[Math.floor(Math.random() * 6)];
		this.showText = true;

		setTimeout(() => {
			this.showText = false;
		}, 2000)


	}
}
