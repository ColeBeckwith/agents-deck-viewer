import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../classes/Card';

@Component({
	selector: 'agt-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {

	@Output() actionHandler = new EventEmitter();
	@Input() actions;
	@Input() card: Card;
	@Input() title: string;

	constructor() {
	}
}
