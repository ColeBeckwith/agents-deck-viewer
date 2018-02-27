import { Component, OnInit } from '@angular/core';
import encounterCardData from '../../../card-data/encounter-cards';
import { EncounterCard } from '../../../classes/EncounterCard';

@Component({
	selector: 'agt-encounter-cards',
	templateUrl: './encounter-cards.component.html',
	styleUrls: ['./encounter-cards.component.scss']
})
export class EncounterCardsComponent implements OnInit {
	encounterCards: Array<EncounterCard> = [];

	totalCombatApplicable = 0;
	totalStealthApplicable = 0;
	totalMagicApplicable = 0;
	totalTechApplicable = 0;

	rank1Stats = {
		totalCards: 0,
		totalSkillChecks: 0,
		totalSnare: 0,
		averageDifficulty: 0,
		totalDifficulty: 0,
		totalStealthApplicable: 0,
		totalMagicApplicable: 0,
		totalTechApplicable: 0,
		totalCombatApplicable: 0
	};

	rank2Stats = {
		totalCards: 0,
		totalSkillChecks: 0,
		totalSnare: 0,
		averageDifficulty: 0,
		totalDifficulty: 0,
		totalStealthApplicable: 0,
		totalMagicApplicable: 0,
		totalTechApplicable: 0,
		totalCombatApplicable: 0
	};

	rank3Stats = {
		totalCards: 0,
		totalSkillChecks: 0,
		totalSnare: 0,
		averageDifficulty: 0,
		totalDifficulty: 0,
		totalStealthApplicable: 0,
		totalMagicApplicable: 0,
		totalTechApplicable: 0,
		totalCombatApplicable: 0
	};

	rank4Stats = {
		totalCards: 0,
		totalSkillChecks: 0,
		totalSnare: 0,
		averageDifficulty: 0,
		totalDifficulty: 0,
		totalStealthApplicable: 0,
		totalMagicApplicable: 0,
		totalTechApplicable: 0,
		totalCombatApplicable: 0
	};

	constructor() {
	}

	ngOnInit() {
		this.initializeEncounterCards(encounterCardData);
	}


	initializeEncounterCards(cardData) {
		cardData.forEach((card) => {
			this.encounterCards.push(new EncounterCard(card));
		});

		this.buildStats();
	}

	buildStats() {
		this.encounterCards.forEach((card) => {
			if (card.title === 'Doomsday') {
				// This throws off averages, so ignore it.
				return;
			}
			let stats = this[`rank${card.rank}Stats`];
			stats.totalCards++;

			if (card.snare) {
				stats.totalSnare++;
			}

			if (card.skillCheck) {
				stats.totalSkillChecks++;
				stats.totalDifficulty += card.skillCheck.difficulty;

				if (card.skillCheck.magicApplicable) {
					this.totalMagicApplicable++;
					stats.totalMagicApplicable++;
				}

				if (card.skillCheck.techApplicable) {
					this.totalTechApplicable++;
					stats.totalTechApplicable++;
				}

				if (card.skillCheck.combatApplicable) {
					this.totalCombatApplicable++;
					stats.totalCombatApplicable++;
				}

				if (card.skillCheck.stealthApplicable) {
					this.totalStealthApplicable++;
					stats.totalStealthApplicable++;
				}
			}
		});

		[this.rank1Stats, this.rank2Stats, this.rank3Stats, this.rank4Stats].forEach((stat) => {
			stat.averageDifficulty = Number((stat.totalDifficulty / stat.totalSkillChecks).toFixed(2));
		});

	}

}
