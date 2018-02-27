import { Component, OnInit } from '@angular/core';
import { DeckManagerService } from './board-deck-viewer/deck-manager/deck-manager.service';
import { BoardService } from './board-service/board.service';
import { PlayerService } from '../player-service/player.service';

@Component({
	selector: 'agt-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	constructor(public deckManager: DeckManagerService,
				public boardService: BoardService,
				private playerService: PlayerService) {
	}

	ngOnInit() {
		this.deckManager.initializeDecks();
		this.selectTestDefaults();
	}

	selectTestDefaults() {
		this.playerService.addPlayer();
		this.playerService.activePlayer.character = this.deckManager.selectDeck('Character').draw();

		this.boardService.selectInfiltration(this.deckManager.selectDeck('Infiltration').draw());
	}
}
