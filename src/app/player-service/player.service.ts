import { EventEmitter, Injectable } from '@angular/core';
import { Player } from '../../classes/Player';

@Injectable()
export class PlayerService {
	public players: Array<Player> = [];
	public activePlayer: Player;
	public playerAddedEvent: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	addPlayer() {
		const newPlayer = new Player();
		this.players.push(newPlayer);
		this.activePlayer = newPlayer;
		this.playerAddedEvent.emit();
	}
}
