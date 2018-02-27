import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board-service/board.service';
import { PlayerService } from '../../player-service/player.service';

@Component({
	selector: 'agt-board-utilities',
	templateUrl: './board-utilities.component.html',
	styleUrls: ['./board-utilities.component.scss']
})
export class BoardUtilitiesComponent implements OnInit {

	constructor(public boardService: BoardService,
				private playerService: PlayerService) {
	}

	ngOnInit() {
	}

	raiseAlertCounter() {
		this.boardService.alertCounter++;
	}

	lowerAlertCounter() {
		this.boardService.alertCounter--;
	}

	nextRound() {
		this.boardService.alertCounter--;
		this.playerService.drawStartRoundCards();

	}

}
