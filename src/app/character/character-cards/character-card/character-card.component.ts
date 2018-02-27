import { Component, Input, OnInit } from '@angular/core';
import { CharacterCard } from '../../../../classes/CharacterCard';

@Component({
	selector: 'agt-character-card',
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	@Input() character: CharacterCard;

	@Input() interactive = false;

	setCharacterStat(stat, point) {
		if (!this.interactive) {
			return;
		}
		this.character.stats[stat].currentValue = point;
	}

	reduceHealth() {
		this.character.health--;
	}

	addHealth() {
		this.character.health++;
	}

	reduceFavor() {
		this.character.favor--;
	}

	addFavor() {
		this.character.favor++;
	}

	increaseCredits() {
		this.character.credits += 1;
	}

	decreaseCredits() {
		this.character.credits -= 1;
	}

}
