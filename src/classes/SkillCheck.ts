import { Card } from './Card';

export class SkillCheck {
	luck: number;
	difficulty: number;
	successText: string;
	failureText: string;
	combatApplicable: boolean;
	stealthApplicable: boolean;
	techApplicable: boolean;
	magicApplicable: boolean;

	cardsApplied: Array<Card>;
	onSuccess;
	onFailure;

	constructor(data) {
		this.luck = data.luck;
		this.difficulty = data.difficulty;
		this.combatApplicable = data.applicableSkills.indexOf('c') !== -1;
		this.stealthApplicable = data.applicableSkills.indexOf('s') !== -1;
		this.techApplicable = data.applicableSkills.indexOf('t') !== -1;
		this.magicApplicable = data.applicableSkills.indexOf('m') !== -1;
		this.successText = data.successText;
		this.failureText = data.failureText;
	}

}
