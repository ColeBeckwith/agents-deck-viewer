export default [

	// TECH

	{
		type: 't',
		value: 0,
		title: 'Overload',
		count: 1
	},
	{
		type: 't',
		title: 'Interface',
		value: 1,
		count: 16
	},
	{
		type: 't',
		value: 4,
		title: 'Hack',
		count: 10
	},
	{
		type: 't',
		value: 0,
		title: 'Trojan Horse',
		skillCheckText: 'If you fail, reveal 6 encounter cards.',
		count: 2
	},
	{
		type: 't',
		value: 2,
		title: 'Statistical Analysis',
		skillCheckText: 'Nullify any Luck affects.',
		count: 4
	},
	{
		type: 't',
		value: 3,
		title: 'X-Ray Vision',
		discardText: 'View all cards in a straight or diagonal line from current position.',
		count: 2
	},
	{
		type: 't',
		value: 4,
		title: 'Sonar Grenade',
		discardText: 'Reveal all adjacent cards.',
		count: 2
	},


	// MAGIC

	{
		type: 'm',
		value: 0,
		title: 'Drain',
		count: 1
	},
	{
		type: 'm',
		value: 1,
		title: 'Flicker',
		count: 8
	},
	{
		type: 'm',
		value: 2,
		title: 'Flames',
		count: 15
	},
	{
		type: 'm',
		value: 6,
		title: 'Inferno',
		skillCheckText: 'You may use this card as a Combat or Magic card.',
		count: 4
	},
	{
		type: 'm',
		value: 0,
		title: 'Mirror',
		skillCheckText: 'Treat this card as if it were the one played before it.',
		count: 2
	},
	{
		type: 'm',
		value: -8,
		title: 'Rewind',
		skillCheckText: 'Take all the other cards that were played on this Skill Check into your hand after it is resolved.',
		count: 1
	},
	{
		type: 'm',
		value: 0,
		title: 'Necromancy',
		skillCheckText: 'Ignore all effects of this Skill Check. Replace this encounter with an encounter of 1 higher rank.',
		count: 2
	},
	{
		type: 'm',
		value: 8,
		title: 'Healing Aura',
		discardText: '+2 Health to any player.',
		count: 1
	},

	// STEALTH

	{
		type: 's',
		value: 0,
		title: 'Stumble',
		count: 1
	},
	{
		type: 's',
		value: 2,
		title: 'Sneak',
		count: 15
	},
	{
		type: 's',
		value: 1,
		title: 'Silence',
		skillCheckText: 'Negate negative Alert Counter affects.',
		count: 3
	},
	{
		type: 's',
		value: 4,
		title: 'Hidden Blade',
		skillCheckText: 'This card can be played after all other cards and luck are totalled.',
		count: 4
	},
	{
		type: 's',
		value: 4,
		title: 'Lucky Throw',
		skillCheckText: '+1 Luck.',
		count: 2
	},
	{
		type: 's',
		value: 4,
		title: 'Recon',
		discardText: 'Reveal a card up to 2 spaces away.',
		count: 3
	},
	{
		type: 's',
		value: 4,
		title: 'Quick Feet',
		discardText: 'Move an extra space.',
		count: 5
	},

	// COMBAT

	{
		type: 'c',
		value: 0,
		title: 'Weapon Jam',
		count: 1
	},
	{
		type: 'c',
		value: 3,
		title: 'Fire Assault Rifle',
		count: 10
	},
	{
		type: 'c',
		value: 1,
		title: 'Fire Handgun',
		count: 18
	},
	{
		type: 'c',
		value: 0,
		title: 'Fire Sniper Fire',
		skillCheckText: 'This card can be played on any Skill Check. +1 to its value for each space away.',
		count: 2
	},
	{
		type: 'c',
		value: 8,
		title: 'Frag Grenade',
		skillCheckText: 'Alert Counter -1',
		count: 2
	},
	{
		type: 'c',
		value: 10,
		title: 'Berserk',
		skillCheckText: '-1 Health.',
		count: 2
	}
]
