import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../classes/Deck';

@Component({
	selector: 'agt-ability-deck',
	templateUrl: './ability-deck.component.html',
	styleUrls: ['./ability-deck.component.scss']
})
export class AbilityDeckComponent implements OnInit {

	@Input() deck: Deck;

	constructor() {
	}

	ngOnInit() {
	}

}
