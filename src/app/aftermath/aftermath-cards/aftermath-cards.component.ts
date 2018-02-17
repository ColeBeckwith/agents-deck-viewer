import { Component, OnInit } from '@angular/core';

import aftermathData from '../../../card-data/aftermath-cards';
import { AftermathCard } from '../../../classes/AftermathCard';

@Component({
	selector: 'agt-aftermath-cards',
	templateUrl: './aftermath-cards.component.html',
	styleUrls: ['./aftermath-cards.component.scss']
})
export class AftermathCardsComponent implements OnInit {
	aftermathCards: Array<AftermathCard> = [];

	constructor() {
	}

	ngOnInit() {
		aftermathData.forEach((cardDatum) => {
  			this.aftermathCards.push(new AftermathCard(cardDatum));
		});
	}
}
