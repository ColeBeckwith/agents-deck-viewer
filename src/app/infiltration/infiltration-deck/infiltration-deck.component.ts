import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../../classes/Deck';
import { BoardService } from '../../board/board-service/board.service';
import { InfiltrationCard } from '../../../classes/InfiltrationCard';
import { DeckManagerService } from '../../board/board-deck-viewer/deck-manager/deck-manager.service';

@Component({
	selector: 'agt-infiltration-deck',
	templateUrl: './infiltration-deck.component.html',
	styleUrls: ['./infiltration-deck.component.scss']
})
export class InfiltrationDeckComponent implements OnInit {
	@Input() deck: Deck;

	infiltrationName: string;

	constructor(private boardService: BoardService,
				private deckManager: DeckManagerService) {
	}

	ngOnInit() {
	}

	drawInfiltration() {
		this.boardService.clearCurrentInfiltration();
		this.boardService.selectInfiltration((<InfiltrationCard>this.deck.draw()));
	}

	drawSpecificInfiltration() {
		this.boardService.clearCurrentInfiltration();
		const infiltrationCard = this.deckManager.selectDeck('Infiltration').drawByProperty('title', this.infiltrationName, true);
		if (!infiltrationCard) {
			console.error('No Infiltration Card by that name available.');
		} else {
			this.boardService.selectInfiltration(infiltrationCard);
		}
	}

}
