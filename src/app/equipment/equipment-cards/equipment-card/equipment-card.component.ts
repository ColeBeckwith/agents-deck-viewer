import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentCard } from '../../../../classes/EquipmentCard';

@Component({
	selector: 'agt-equipment-card',
	templateUrl: './equipment-card.component.html',
	styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent implements OnInit {
	@Output() actionHandler = new EventEmitter();

	@Input() card: EquipmentCard;
	@Input() actions: Array<string> = [];

	constructor() {
	}

	ngOnInit() {
	}

}
