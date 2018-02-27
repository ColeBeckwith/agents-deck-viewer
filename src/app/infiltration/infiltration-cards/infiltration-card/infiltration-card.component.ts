import { Component, Input, OnInit } from '@angular/core';
import { InfiltrationCard } from '../../../../classes/InfiltrationCard';

@Component({
	selector: 'agt-infiltration-card',
	templateUrl: './infiltration-card.component.html',
	styleUrls: ['./infiltration-card.component.scss']
})
export class InfiltrationCardComponent implements OnInit {

	@Input() card: InfiltrationCard;

	constructor() {
	}

	ngOnInit() {
	}

}
