import { Card } from './Card';
import { SkillCheck } from './SkillCheck';

export class EncounterCard extends Card {
	skillCheck: SkillCheck;
	rank: number;
	successText: string;
	failureText: string;

	constructor(data) {
		super();

		this.title = data.title;
		this.rank = data.rank;
		this.successText = data.successText;
		this.failureText = data.failureText;



		if (data.skillCheck) {
			this.skillCheck = new SkillCheck(data.skillCheck);
		} else {
			this.skillCheck = null
		}

	}
}
