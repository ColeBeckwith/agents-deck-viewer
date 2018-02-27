import { Component, OnInit } from '@angular/core';
import { DeckManagerService } from '../board/board-deck-viewer/deck-manager/deck-manager.service';
import { PlayerService } from '../player-service/player.service';

@Component({
	selector: 'agt-card-pool',
	templateUrl: './card-pool.component.html',
	styleUrls: ['./card-pool.component.scss']
})
export class CardPoolComponent implements OnInit {

	constructor(public deckManager: DeckManagerService,
				private playerService: PlayerService) {
	}

	ngOnInit() {
	}

	handleAction(action, card) {
		if (action === 'Draw') {
			this.playerService.activePlayer.equipmentCards.push(card);
			this.deckManager.removeFromPool(card);
		}

		if (action === 'Discard') {
			this.deckManager.removeFromPool(card);
			this.deckManager.discardCard(card);
		}
	}

}
