import { Card } from './Card';

function buildStats(data): Stats {
	return {
		magic: buildStat(data, 'm'),
		combat: buildStat(data, 'c'),
		stealth: buildStat(data, 's'),
		tech: buildStat(data, 't')
	}
}

function buildStat(data, key): Stat {
	return {
		maxValue: data.maxStats[key],
		currentValue: data.startingStats[key],
		startingValue: data.startingStats[key],
		firstPerk: data.skills[key][0],
		secondPerk: data.skills[key][1],
		thirdPerk: data.skills[key][2],
		fourthPerk: data.skills[key][3],
		attributes: [data.skills[key][0], data.skills[key][1], data.skills[key][2], data.skills[key][3]]
	}
}

interface Stats {
	magic: Stat;
	stealth: Stat;
	tech: Stat;
	combat: Stat;
}

interface Stat {
	maxValue: number;
	currentValue: number;
	startingValue: number;
	firstPerk: string;
	secondPerk: string;
	thirdPerk: string;
	fourthPerk: string;
	attributes: Array<string>
}

export class CharacterCard extends Card {
	name: string;
	bio: string;
	stats: Stats;
	health: number;
	favor: number;
	credits: number;

	constructor(data) {
		super(data);

		this.name = data.name;
		this.bio = data.bio;
		this.health = data.startingStats.health || 15;
		this.favor = 3;
		this.credits = data.startingStats.credits || 0;

		this.stats = buildStats(data);
	}
}
