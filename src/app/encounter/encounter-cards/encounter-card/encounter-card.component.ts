import { Component } from '@angular/core';
import { CardComponent } from '../../../card/card.component';

@Component({
	selector: 'agt-encounter-card',
	templateUrl: './encounter-card.component.html',
	styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent extends CardComponent {
	constructor() {
		super();
	}
}
