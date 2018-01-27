export default [
	{
		title: 'Assassinate CEO',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 30,
			applicableSkills: ['s', 't', 'm', 'c'],
			successText: 'The CEO is assassinated. If any non-stealth card were contributed, alert counter -4.',
			failureText: 'All Agents on this card lose 3 health. Alert Counter -2.'
		}
	},
	{
		title: 'Compromise Data',
		rank: 4,
		skillCheck: {
			difficulty: 25,
			applicableSkills: ['t'],
			successText: 'The data is compromised.',
			failureText: 'System lockdown. Increase this card\'s difficulty by 5.'
		}
	},
	{
		title: 'The Oracle',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['m'],
			successText: 'The Oracle finds you worthy. +1 Magic to the highest contributor.',
			failureText: 'The Oracle drains your magic. -1 Magic to all occupants.'
		}
	},
	{
		title: 'Warehouse Weak Point',
		rank: 3,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['t', 'c', 'm'],
			successText: 'The pillar crumbles to the floor. Alert Counter -1.',
			failureText: 'The pillar stands firm. Alert Counter -1.'
		}
	},
	{
		title: 'Tree of Death',
		rank: 3,
		skillCheck: {
			difficulty: 13,
			applicableSkills: ['m', 'c'],
			successText: 'The tree is destroyed.',
			failureText: 'Immediately take 1 damage. Card remains on board. Any time an Agent enters an adjacent space, take 1 damage.'
		}
	},
	{
		title: 'Tree of Life',
		rank: 2,
		skillCheck: {
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'The tree restores 2 health to all players within 2 spaces.',
			failureText: 'The tree withers.',
			optional: true
		}
	},

	{
		title: 'Magic Rift',
		rank: 2,
		text: 'If your magic stat is 2+ you may pass through this card as if it were empty. Otherwise, take 2 damage whenever you enter this card, regardless of whether or not it was revealed.'
	},
	{
		title: 'Anti-Magic Barrier',
		rank: 2,
		text: 'If your magic stat is 2+, take 3 damage when you leave this card. Do not take damage if you leave from the direction you entered.'
	},
	{
		title: 'Laser Matrix',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 7,
			applicableSkills: ['s', 't'],
			successText: 'If you pass with 4 or more Tech points, the lasers are disarmed. Remove the card. Otherwise, the card stays on the board.',
			failureText: 'Alert Counter -1'
		}
	},
	{
		title: 'Security Office',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 16,
			applicableSkills: ['s', 't', 'm', 'c'],
			successText: 'The Security Office is overtaken. Alert Counter +3.',
			failureText: 'An alarm sounds. Add one rank 2 card to the nearest empty space. Alert Counter -2.'
		}
	},
	{
		title: 'Security Guard',
		rank: 1,
		skillCheck: {
			luck: 1,
			difficulty: 3,
			applicableSkills: ['c', 's', 'm'],
			successText: 'If any non-stealth cards were played, Alert Counter -1. If a combat or magic card was played, remove this card.',
			failureText: 'Take 1 damage. Alert Counter -2.'
		}
	},
	{
		title: 'Psychic Barrier',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['m'],
			successText: 'The barrier fades.',
			failureText: 'You are unable to walk through. This card remains on the board. You may only leave from the direction you entered.',
			optional: true
		}
	},
	{
		title: 'EMP',
		rank: 1,
		text: 'Immediately discard all tech cards, and do not draw any at the start of the next round.'
	},
	{
		title: 'Disarm Alarm',
		rank: 1,
		skillCheck: {
			difficulty: 6,
			applicableSkills: ['t', 's'],
			successText: 'Alert Counter +1',
			failureText: 'Alert Counter -1'
		}
	}
];
