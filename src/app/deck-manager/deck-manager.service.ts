import { Injectable } from '@angular/core';

import encounterCardData from '../../card-data/encounter-cards';
import abilityCardData from '../../card-data/ability-cards';
import equipmentCardData from '../../card-data/equipment-cards';

import { Deck } from '../../classes/Deck';
import { EncounterCard } from '../../classes/EncounterCard';
import { AbilityCard } from '../../classes/AbilityCard';
import { EquipmentCard } from '../../classes/EquipmentCard';


@Injectable()
export class DeckManagerService {

	public decks: Array<Deck> = [];

	constructor() {
	}

	public initializeDecks() {

		this.decks.push(new Deck({cardType: 'Encounter', modifier: 1}));
		this.decks.push(new Deck({cardType: 'Encounter', modifier: 2}));
		this.decks.push(new Deck({cardType: 'Encounter', modifier: 3}));
		this.decks.push(new Deck({cardType: 'Encounter', modifier: 4}));

		this.decks.push(new Deck({cardType: 'Ability', modifier: 'Magic'}));
		this.decks.push(new Deck({cardType: 'Ability', modifier: 'Combat'}));
		this.decks.push(new Deck({cardType: 'Ability', modifier: 'Stealth'}));
		this.decks.push(new Deck({cardType: 'Ability', modifier: 'Tech'}));

		this.decks.push(new Deck({cardType: 'Equipment'}));
		this.decks.push(new Deck({cardType: 'Loot'}));

		this.decks.push(new Deck({cardType: 'Aftermath'}));
		this.decks.push(new Deck({cardType: 'Contract'}));
		this.decks.push(new Deck({cardType: 'Character'}));

		encounterCardData.forEach((cardDatum) => {
			let encounterCard = new EncounterCard(cardDatum);
			this.discardCard(encounterCard);
		});

		abilityCardData.forEach((cardDatum) => {
			let abilityCard = new AbilityCard(cardDatum);
			this.discardCard(abilityCard);
		});

		equipmentCardData.forEach((cardDatum) => {
			let equipmentCard = new EquipmentCard(cardDatum);
			this.discardCard(equipmentCard);
		});

		Object.keys(this.decks).forEach((key: string) => {
			this.decks[key].shuffle();
		});
	}

	public discardCard(card) {
		if (card instanceof EncounterCard) {
			this.selectDeck('Encounter', card.rank).discard(card);
		}

		if (card instanceof AbilityCard) {
			this.selectDeck('Ability', card.type).discard(card);
		}

		if (card instanceof EquipmentCard) {
			this.selectDeck('Equipment').discard(card);
		}
	}

	public selectDeck(type: string, modifier?: number | string): Deck {
		for (let i = 0; i < this.decks.length; i++) {
			if (this.decks[i].cardType === type && (!modifier || this.decks[i].modifier === modifier)) {
				return this.decks[i];
			}
		}
	}
}
