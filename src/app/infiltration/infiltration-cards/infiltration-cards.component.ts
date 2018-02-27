import { Component, OnInit } from '@angular/core';
import { InfiltrationCard } from '../../../classes/InfiltrationCard';

import infiltrationCardData from '../../../card-data/infiltration-cards';

@Component({
	selector: 'agt-infiltration-cards',
	templateUrl: './infiltration-cards.component.html',
	styleUrls: ['./infiltration-cards.component.scss']
})
export class InfiltrationCardsComponent implements OnInit {

	infiltrationCards: Array<InfiltrationCard> = [];

	constructor() {
	}

	ngOnInit() {
		infiltrationCardData.forEach((cardDatum) => {
			this.infiltrationCards.push(new InfiltrationCard(cardDatum));
		});
	}
}
