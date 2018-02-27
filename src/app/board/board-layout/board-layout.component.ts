import { Component, Input, OnInit } from '@angular/core';
import { BoardSpace } from '../../../classes/InfiltrationCard';
import { BoardService } from '../board-service/board.service';
import { PlayerService } from '../../player-service/player.service';
import { DeckManagerService } from '../board-deck-viewer/deck-manager/deck-manager.service';

@Component({
	selector: 'agt-board-layout',
	templateUrl: './board-layout.component.html',
	styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {
	@Input() layout: Array<Array<BoardSpace>>;

	encounterActions = ['Toggle Show', 'Place Character', 'Remove'];
	lootActions = ['Toggle Show', 'Place Character', 'Remove'];

	constructor(private boardService: BoardService, private playerService: PlayerService, private deckManager: DeckManagerService) {
	}

	ngOnInit() {
	}

	handleAction(actionType, space: BoardSpace) {
		if (actionType === 'Place Character') {
			this.placeCharacter(space);
		}

		if (actionType === 'Remove') {
			this.deckManager.discardCard(space.card);
			space.type = 'Empty';
		}

		if (actionType === 'Toggle Show') {
			space.card.hidden = !space.card.hidden;
		}

	}

	placeCharacter(space: BoardSpace) {
		this.boardService.placeCharacter(space, this.playerService.activePlayer.character.name)
	}

	placeEncounter(space: BoardSpace, rank: number) {
		this.boardService.placeEncounter(space, rank);
	}
}
