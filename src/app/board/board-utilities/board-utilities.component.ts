import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board-service/board.service';

@Component({
	selector: 'agt-board-utilities',
	templateUrl: './board-utilities.component.html',
	styleUrls: ['./board-utilities.component.scss']
})
export class BoardUtilitiesComponent implements OnInit {

	constructor(public boardService: BoardService) {
	}

	ngOnInit() {
	}

	raiseAlertCounter() {
		this.boardService.alertCounter++;
	}

	lowerAlertCounter() {
		this.boardService.alertCounter--;
	}

}
