import { Component, OnInit } from '@angular/core';
import encounterCardData from '../../card-data/encounter-cards';
import { EncounterCard } from '../../classes/EncounterCard';

@Component({
	selector: 'agt-encounter-cards',
	templateUrl: './encounter-cards.component.html',
	styleUrls: ['./encounter-cards.component.scss']
})
export class EncounterCardsComponent implements OnInit {
	encounterCards: Array<EncounterCard> = [];

	constructor() {
	}

	ngOnInit() {
		this.initializeEncounterCards(encounterCardData);
	}


	initializeEncounterCards(cardData) {
		cardData.forEach((card) => {
			this.encounterCards.push(new EncounterCard(card));
		});
	}

}
