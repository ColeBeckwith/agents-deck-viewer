import { Card } from './Card';

export class EquipmentCard extends Card {
	cardType = 'Equipment';
	magicRequired: number;
	combatRequired: number;
	techRequired: number;
	stealthRequired: number;
	type: string;
	cost: number;
	equipped: boolean;

	constructor(data) {
		super(data);

		this.type = data.type;
		this.cost = data.cost;

		if (data.requirements) {
			this.magicRequired = data.requirements.m;
			this.combatRequired = data.requirements.c;
			this.techRequired = data.requirements.t;
			this.stealthRequired = data.requirements.s;
		}

	}
}

