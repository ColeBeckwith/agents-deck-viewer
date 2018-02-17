import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player-service/player.service';
import { DeckManagerService } from '../board-deck-viewer/deck-manager/deck-manager.service';
import { CharacterCard } from '../../../classes/CharacterCard';

@Component({
	selector: 'agt-character-select',
	templateUrl: './character-select.component.html',
	styleUrls: ['./character-select.component.scss']
})
export class CharacterSelectComponent implements OnInit {
	public active: boolean;
	public characterOptions: Array<CharacterCard> = [];

	constructor(private playerService: PlayerService,
				private deckService: DeckManagerService) {
	}

	ngOnInit() {
		this.playerService.playerAddedEvent.subscribe(() => {
			this.handlePlayerAdded();
		});
	}

	handlePlayerAdded() {
		const characterDeck = this.deckService.selectDeck('Character');
		this.characterOptions = [];
		this.deckService.selectDeck('Character').shuffleAll();
		this.characterOptions.push(characterDeck.draw());
		this.characterOptions.push(characterDeck.draw());
		this.characterOptions.push(characterDeck.draw());
		this.active = true;
	}


	selectCharacter(character: CharacterCard) {
		this.playerService.activePlayer.character = character;
		this.characterOptions.forEach((characterOption) => {
			if (characterOption !== character) {
				this.deckService.discardCard(characterOption);
			}
		});
		this.deckService.selectDeck('Character').shuffleAll();
		this.active = false;
	}

	cancelAddPlayer() {
		this.characterOptions.forEach((card: CharacterCard) => {
			this.deckService.discardCard(card);
		});

		this.deckService.selectDeck('Character').shuffleAll();
		this.playerService.players.pop();
		this.playerService.activePlayer = null;

		this.active = false;
	}

}
