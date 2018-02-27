import { Component, OnInit } from '@angular/core';

import equipmentCardData from '../../../card-data/equipment-cards';
import { EquipmentCard } from '../../../classes/EquipmentCard';

@Component({
	selector: 'agt-equipment-cards',
	templateUrl: './equipment-cards.component.html',
	styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {
	equipmentCards: Array<EquipmentCard> = [];

	stats = {
		Head: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		Arm: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		Legs: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		Chest: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		Consumable: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		Training: {
			totalMagicCards: 0,
			totalStealthCards: 0,
			totalCombatCards: 0,
			totalTechCards: 0,
			totalCards: 0
		},
		totalMagicCards: 0,
		totalStealthCards: 0,
		totalCombatCards: 0,
		totalTechCards: 0,
		totalCards: 0
	};

	constructor() {
	}

	ngOnInit() {
		equipmentCardData.forEach((cardDatum) => {
			this.equipmentCards.push(new EquipmentCard(cardDatum));
		});

		this.buildStats(this.equipmentCards);
	}

	buildStats(cards) {
		cards.forEach((card) => {
			this.stats.totalCards++;
			this.stats[card.type].totalCards++;
			if (card.magicRequired) {
				this.stats.totalMagicCards++;
				this.stats[card.type].totalMagicCards++;
			} else if (card.techRequired) {
				this.stats.totalTechCards++;
				this.stats[card.type].totalTechCards++;
			} else if (card.combatRequired) {
				this.stats.totalCombatCards++;
				this.stats[card.type].totalCombatCards++;
			} else if (card.stealthRequired) {
				this.stats.totalStealthCards++;
				this.stats[card.type].totalStealthCards++;
			}
		});

		console.log(this.stats);
	}

}
