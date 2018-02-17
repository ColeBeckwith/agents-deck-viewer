import { Injectable } from '@angular/core';

import encounterCardData from '../../../../card-data/encounter-cards';
import abilityCardData from '../../../../card-data/ability-cards';
import equipmentCardData from '../../../../card-data/equipment-cards';
import characterCardData from '../../../../card-data/character-cards';
import infiltrationCardData from '../../../../card-data/infiltration-cards';
import lootCardData from '../../../../card-data/loot-cards';

import { Deck } from '../../../../classes/Deck';
import { EncounterCard } from '../../../../classes/EncounterCard';
import { AbilityCard } from '../../../../classes/AbilityCard';
import { EquipmentCard } from '../../../../classes/EquipmentCard';
import { CharacterCard } from '../../../../classes/CharacterCard';
import { InfiltrationCard } from '../../../../classes/InfiltrationCard';
import { LootCard } from '../../../../classes/LootCard';

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

		this.decks.push(new Deck({cardType: 'Loot', modifier: 1}));
		this.decks.push(new Deck({cardType: 'Loot', modifier: 2}));
		this.decks.push(new Deck({cardType: 'Loot', modifier: 3}));

		this.decks.push(new Deck({cardType: 'Aftermath'}));
		this.decks.push(new Deck({cardType: 'Contract'}));
		this.decks.push(new Deck({cardType: 'Character'}));

		this.decks.push(new Deck({cardType: 'Infiltration'}));

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

		characterCardData.forEach((cardDatum) => {
			let characterCard = new CharacterCard(cardDatum);
			this.discardCard(characterCard);
		});

		infiltrationCardData.forEach((cardDatum) => {
			let infiltrationCard = new InfiltrationCard(cardDatum);
			this.discardCard(infiltrationCard);
		});

		lootCardData.forEach((cardDatum) => {
			let lootCard = new LootCard(cardDatum);
			this.discardCard(lootCard);
		});

		this.decks.forEach((deck: Deck) => {
			deck.shuffleAll();
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
			card.equipped = false;
			this.selectDeck('Equipment').discard(card);
		}

		if (card instanceof CharacterCard) {
			this.selectDeck('Character').discard(card);
		}

		if (card instanceof InfiltrationCard) {
			this.selectDeck('Infiltration').discard(card);
		}

		if (card instanceof LootCard) {
			this.selectDeck('Loot', card.rank).discard(card);
		}
	}

	public selectDeck(type: string, modifier?: number | string): any {
		for (let i = 0; i < this.decks.length; i++) {
			if (this.decks[i].cardType === type && (!modifier || this.decks[i].modifier === modifier)) {
				return this.decks[i];
			}
		}
	}
}
