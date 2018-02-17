import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LootCard } from '../../../../classes/LootCard';

@Component({
	selector: 'agt-loot-card',
	templateUrl: './loot-card.component.html',
	styleUrls: ['./loot-card.component.scss']
})
export class LootCardComponent implements OnInit {
	@Output() actionHandler = new EventEmitter();
	@Input() actions: Array<string>;

	@Input() card: LootCard;

	constructor() {
	}

	ngOnInit() {
	}

}
