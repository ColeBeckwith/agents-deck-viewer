import { Component, OnInit } from '@angular/core';
import abilityCardData from '../../../card-data/ability-cards';
import { AbilityCard } from '../../../classes/AbilityCard';

@Component({
	selector: 'agt-ability-cards',
	templateUrl: './ability-cards.component.html',
	styleUrls: ['./ability-cards.component.scss']
})
export class AbilityCardsComponent implements OnInit {
	abilityCards: Array<AbilityCard> = [];

	totalMagicCards: number;
	totalStealthCards: number;
	totalCombatCards: number;
	totalTechCards: number;
	averageMagicValue: number;
	averageStealthValue: number;
	averageCombatValue: number;
	averageTechValue: number;

	constructor() {
	}

	ngOnInit() {
		this.initializeAbilityCards(abilityCardData);
	}

	initializeAbilityCards(cards) {
		cards.forEach((card) => {
			this.abilityCards.push(new AbilityCard(card));
		});

		this.analyzeStats(this.abilityCards);
	}

	analyzeStats(cards: Array<AbilityCard>) {
		let totalMagicValue = 0;
		let totalCombatValue = 0;
		let totalTechValue = 0;
		let totalStealthValue = 0;

		this.totalMagicCards = 0;
		this.totalStealthCards = 0;
		this.totalCombatCards = 0;
		this.totalTechCards = 0;

		cards.forEach((card) => {
			switch (card.type) {
				case 'Magic':
					totalMagicValue += (card.value * card.count);
					this.totalMagicCards += card.count;
					break;
				case 'Combat':
					totalCombatValue += (card.value * card.count);
					this.totalCombatCards += card.count;
					break;
				case 'Tech':
					totalTechValue += (card.value * card.count);
					this.totalTechCards += card.count;
					break;
				case 'Stealth':
					totalStealthValue += (card.value * card.count);
					this.totalStealthCards += card.count;
					break;
				default:
					break;
			}
		});

		this.averageCombatValue = Number((totalCombatValue / this.totalCombatCards).toFixed(2));
		this.averageTechValue = Number((totalTechValue / this.totalTechCards).toFixed(2));
		this.averageMagicValue = Number((totalMagicValue / this.totalMagicCards).toFixed(2));
		this.averageStealthValue = Number((totalStealthValue / this.totalStealthCards).toFixed(2));
	}
}
