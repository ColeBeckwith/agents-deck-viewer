import { Component, OnInit } from '@angular/core';

import characterCardData from '../../../card-data/character-cards';
import { CharacterCard } from '../../../classes/CharacterCard';

@Component({
	selector: 'agt-character-cards',
	templateUrl: './character-cards.component.html',
	styleUrls: ['./character-cards.component.scss']
})
export class CharacterCardsComponent implements OnInit {
	public characterCards: Array<CharacterCard> = [];

	constructor() {
	}

	ngOnInit() {
		this.initializeCharacterCards()
	}

	private initializeCharacterCards() {
		characterCardData.forEach((card) => {
			this.characterCards.push(new CharacterCard(card));
		});
	}

}
