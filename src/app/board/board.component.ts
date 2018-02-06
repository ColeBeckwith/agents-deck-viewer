import { Component, OnInit } from '@angular/core';
import { DeckManagerService } from '../deck-manager/deck-manager.service';

@Component({
	selector: 'agt-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	constructor(private deckManager: DeckManagerService) {
	}

	ngOnInit() {
		this.deckManager.initializeDecks();

	}

}
