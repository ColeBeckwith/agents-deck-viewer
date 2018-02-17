import { Card } from './Card';

export class AbilityCard extends Card {
	type: string;
	value: number;
	title: string;
	discardText: string;
	skillCheckText: string;
	deployText: string;

	typeMappings = {
		t: 'Tech',
		c: 'Combat',
		m: 'Magic',
		s: 'Stealth'
	};

	constructor(data) {
		super(data);

		this.type = this.typeMappings[data.type];
		this.value = data.value;
		this.title = data.title;
		this.discardText = data.discardText;
		this.skillCheckText = data.skillCheckText;
		this.deployText = data.deployText;
	}
}
