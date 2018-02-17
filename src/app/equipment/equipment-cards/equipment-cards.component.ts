import { Component, OnInit } from '@angular/core';

import equipmentCardData from '../../../card-data/equipment-cards';
import { EquipmentCard } from '../../../classes/EquipmentCard';

@Component({
	selector: 'agt-equipment-cards',
	templateUrl: './equipment-cards.component.html',
	styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {
	equipmentCards: Array<EquipmentCard> = [];

	constructor() {
	}

	ngOnInit() {
		equipmentCardData.forEach((cardDatum) => {
			this.equipmentCards.push(new EquipmentCard(cardDatum));
		});
	}

}
