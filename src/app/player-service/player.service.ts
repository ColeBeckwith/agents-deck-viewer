import { EventEmitter, Injectable } from '@angular/core';
import { Player } from '../../classes/Player';
import { DeckManagerService } from '../board/board-deck-viewer/deck-manager/deck-manager.service';

@Injectable()
export class PlayerService {
	public players: Array<Player> = [];
	public activePlayer: Player;
	public playerAddedEvent: EventEmitter<any> = new EventEmitter<any>();

	constructor(private deckManager: DeckManagerService) {
	}

	addPlayer() {
		const newPlayer = new Player();
		this.players.push(newPlayer);
		this.activePlayer = newPlayer;
		this.playerAddedEvent.emit();
	}

	drawStartRoundCards() {
		this.players.forEach((player: Player) => {
			['combat', 'stealth', 'tech', 'magic'].forEach((stat) => {
				for (let i = 1; i <= player.character.stats[stat].currentValue; i++) {
					player.abilityCards.push(this.deckManager.selectDeck('Ability', stat.substring(0, 1).toUpperCase() + stat.substring(1)).draw());
				}
			});
		});
	}
}
