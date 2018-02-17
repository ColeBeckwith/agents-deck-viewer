import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../player-service/player.service';
import { Deck } from '../../../classes/Deck';

@Component({
	selector: 'agt-equipment-deck',
	templateUrl: './equipment-deck.component.html',
	styleUrls: ['./equipment-deck.component.scss']
})
export class EquipmentDeckComponent implements OnInit {

	@Input() deck: Deck;

	constructor(private playerService: PlayerService) {
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
}
