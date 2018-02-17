import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../player-service/player.service';
import { Player } from '../../../../classes/Player';

@Component({
	selector: 'agt-player-select',
	templateUrl: './player-select.component.html',
	styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit {

	constructor(public playerService: PlayerService) {
	}

	ngOnInit() {
	}

	selectPlayer(player: Player) {
		this.playerService.activePlayer = player;
	}

}
