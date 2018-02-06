import { Card } from './Card';
import { SkillCheck } from './SkillCheck';

export class EncounterCard extends Card {
	skillCheck: SkillCheck;
	rank: number;
	title: string;
	text: string;
	snare: boolean;

	constructor(data) {
		super();

		this.title = data.title;
		this.rank = data.rank;
		this.text = data.text;
		this.snare = data.snare;

		if (data.skillCheck) {
			this.skillCheck = new SkillCheck(data.skillCheck);
		} else {
			this.skillCheck = null
		}
	}

	discard() {

	}
}
