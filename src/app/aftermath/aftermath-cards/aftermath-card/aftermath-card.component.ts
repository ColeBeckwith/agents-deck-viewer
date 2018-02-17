import { Component, Input } from '@angular/core';
import { AftermathCard } from '../../../../classes/AftermathCard';
import { CardComponent } from '../../../card/card.component';

@Component({
	selector: 'agt-aftermath-card',
	templateUrl: './aftermath-card.component.html',
	styleUrls: ['./aftermath-card.component.scss']
})
export class AftermathCardComponent extends CardComponent {
	@Input() card: AftermathCard;

	constructor() {
		super();
	}
}
