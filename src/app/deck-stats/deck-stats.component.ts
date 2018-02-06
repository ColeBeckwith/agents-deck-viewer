import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../classes/Deck';

@Component({
	selector: 'agt-deck-stats',
	templateUrl: './deck-stats.component.html',
	styleUrls: ['./deck-stats.component.scss']
})
export class DeckStatsComponent implements OnInit {

	@Input() deck: Deck;

	constructor() {
	}

	ngOnInit() {
	}

}
