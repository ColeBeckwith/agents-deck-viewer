import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../../classes/Deck';

@Component({
	selector: 'agt-encounter-deck',
	templateUrl: './encounter-deck.component.html',
	styleUrls: ['./encounter-deck.component.scss']
})
export class EncounterDeckComponent implements OnInit {

	@Input() deck: Deck;

	constructor() {
	}

	ngOnInit() {
	}

}
