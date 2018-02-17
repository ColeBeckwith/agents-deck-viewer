import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { DeckManagerService } from './deck-manager/deck-manager.service';

@Component({
	selector: 'agt-board-deck-viewer',
	templateUrl: './board-deck-viewer.component.html',
	styleUrls: ['./board-deck-viewer.component.scss'],
})
export class BoardDeckViewerComponent implements OnInit {
	@HostBinding('class.hovered') hovered = false;

	@HostListener('mouseenter') handleMouseEnter() {
		this.hovered = true;
	}

	@HostListener('mouseleave') handleMouseLeave() {
		this.hovered = false;
	}

	constructor(public deckManager: DeckManagerService) {
	}

	ngOnInit() {
	}

}
