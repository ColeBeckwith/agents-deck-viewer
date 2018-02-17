import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbilityCard } from '../../../../classes/AbilityCard';

@Component({
	selector: 'agt-ability-card',
	templateUrl: './ability-card.component.html',
	styleUrls: ['./ability-card.component.scss']
})
export class AbilityCardComponent implements OnInit {
	@Output() actionHandler = new EventEmitter();

	@Input() card: AbilityCard;
	@Input() actions: Array<string> = [];

	constructor() {
	}

	ngOnInit() {
	}
}
