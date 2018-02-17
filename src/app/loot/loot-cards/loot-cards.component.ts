import { Component, OnInit } from '@angular/core';
import { LootCard } from '../../../classes/LootCard';

import lootCardData from '../../../card-data/loot-cards';

@Component({
	selector: 'agt-loot-cards',
	templateUrl: './loot-cards.component.html',
	styleUrls: ['./loot-cards.component.scss']
})
export class LootCardsComponent implements OnInit {
	lootCards: Array<LootCard> = [];

	constructor() {
	}

	ngOnInit() {
		this.initializeLootCards(lootCardData);
	}


	initializeLootCards(cardData) {
		cardData.forEach((card) => {
			this.lootCards.push(new LootCard(card));
		});
	}

}
