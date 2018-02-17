import { Card } from './Card';
import { SkillCheck } from './SkillCheck';

export class LootCard extends Card {
	rank: number;
	skillCheck: SkillCheck;

	constructor(data) {
		super(data);

		this.rank = data.rank;

		if (data.skillCheck) {
			this.skillCheck = new SkillCheck(data.skillCheck);
		}
	}

}
