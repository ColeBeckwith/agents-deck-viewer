import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../../classes/Deck';
import { PlayerService } from '../../player-service/player.service';

@Component({
	selector: 'agt-ability-deck',
	templateUrl: './ability-deck.component.html',
	styleUrls: ['./ability-deck.component.scss']
})
export class AbilityDeckComponent implements OnInit {

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
