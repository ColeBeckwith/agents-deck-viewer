import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../player-service/player.service';
import { Deck } from '../../../classes/Deck';
import { DeckManagerService } from '../../board/board-deck-viewer/deck-manager/deck-manager.service';

@Component({
	selector: 'agt-equipment-deck',
	templateUrl: './equipment-deck.component.html',
	styleUrls: ['./equipment-deck.component.scss']
})
export class EquipmentDeckComponent implements OnInit {

	@Input() deck: Deck;

	constructor(private playerService: PlayerService,
				private deckManager: DeckManagerService) {
	}

	ngOnInit() {
	}

	addToHand() {
		if (this.playerService.activePlayer) {
			this.playerService.activePlayer.addToHand(this.deck.draw());
		}
	}

	shuffleAll() {
		this.deck.shuffleAll();
	}

	addToPool() {
		this.deckManager.pool.push(this.deck.draw());
	}
}
