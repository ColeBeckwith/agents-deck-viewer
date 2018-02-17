import { Injectable } from '@angular/core';
import { BoardSpace, InfiltrationCard } from '../../../classes/InfiltrationCard';
import { DeckManagerService } from '../board-deck-viewer/deck-manager/deck-manager.service';

@Injectable()
export class BoardService {
	activeBoard;
	activeInfiltration: InfiltrationCard;
	alertCounter;

	constructor(private deckManager: DeckManagerService) {
	}

	selectInfiltration(infiltration: InfiltrationCard) {
		infiltration.forEachSpace((square) => {
			if (square.type === 'Encounter' || square.type === 'Loot') {
				square.card = this.deckManager.selectDeck(square.type, square.rank).draw();
				if (!square.card) {
					console.error(`Not enough cards for type ${square.type} rank ${square.rank}. Time to create some more.`);
					square.card = null;
					return;
				}
				square.card.hidden = true;
			}
		});

		this.alertCounter = infiltration.baseAlertCounter || 10;
		this.activeInfiltration = infiltration;
		this.activeBoard = infiltration.board;

		this.deckManager.discardCard(infiltration);
	}

	placeCharacter(space: BoardSpace, character) {
		this.activeInfiltration.forEachSpace((space) => {
			if (space.occupants.indexOf(character) !== -1) {
				space.occupants.splice(space.occupants.indexOf(character), 1);
			}
		});
		space.occupants.push(character);
	}

	clearCurrentInfiltration() {
		if (this.activeInfiltration) {
			this.activeInfiltration.forEachSpace((space) => {
				space.occupants = [];
				if (space.card) {
					this.deckManager.discardCard(space.card);
					space.card = null;
				}
			});
		}

		this.deckManager.decks.forEach((deck) => {
			if (deck.cardType !== 'Infiltration') {
				deck.shuffleAll();
			}
		});
	}

	placeEncounter(space: BoardSpace, rank: number) {
		const encounterCard = this.deckManager.selectDeck('Encounter', rank).draw();
		encounterCard.hidden = true;
		if (space.card) {
			this.deckManager.discardCard(space.card);
			space.card = null;
		}

		space.card = encounterCard;
		space.type = 'Encounter';
	}

}
