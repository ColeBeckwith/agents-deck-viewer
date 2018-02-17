import { Card } from './Card';
import { SkillCheck } from './SkillCheck';

export class EncounterCard extends Card {
	skillCheck: SkillCheck;
	rank: number;
	snare: boolean;
	reveal: string;

	constructor(data) {
		super(data);

		this.rank = data.rank;
		this.snare = data.snare;
		this.reveal = data.revealText;

		if (data.skillCheck) {
			this.skillCheck = new SkillCheck(data.skillCheck);
		} else {
			this.skillCheck = null
		}
	}
}
