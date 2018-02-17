import { Card } from './Card';
import { SkillCheck } from './SkillCheck';

export class AftermathCard extends Card {
	minPlayers: number;
	maxPlayers: number;
	skillCheck: SkillCheck;

	constructor(data) {
		super(data);

		this.minPlayers = data.minPlayers;
		this.maxPlayers = data.maxPlayers;

		if (data.skillCheck) {

			this.skillCheck = new SkillCheck(data.skillCheck);
		}
	}

}
