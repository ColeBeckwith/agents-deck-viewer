export default [
	{
		title: 'Charlie\'s Unicorn',
		rank: 3,
		text: 'Sacrifice the Unicorn. All other players lose 1 Magic. Draw a Magic 4 Equipment card.'
	},
	{
		title: 'Synthesis',
		rank: 3,
		text: 'Discard 3 Equipment cards. Take any card from the Equipment deck.'
	},
	{
		title: 'Executive Safe',
		rank: 3,
		text: 'Earn 3500 credits.'
	},
	{
		title: 'Junk Food Night',
		rank: 3,
		text: 'Draw 5 Consumables.'
	},
	{
		title: 'Broken ATM',
		rank: 3,
		text: 'Double your credits.'
	},
	{
		title: 'R&D Lab',
		rank: 2,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['t', 's'],
			successText: 'You were able to recover equipment from the lab. Draw 4 cards from the equipment deck and keep 2.',
			failureText: 'The lab is destroyed. Remove this card.'
		}
	},
	{
		title: 'Dragon Eggs',
		rank: 2,
		skillCheck: {
			luck: 4,
			difficulty: 8,
			applicableSkills: ['m', 's'],
			successText: 'You manage to steal the valuable eggs. Gain 3000 credits.',
			failureText: 'You\'ve alerted their mother. Replace this card with "Gadot". If she\'s already in play, replace it with any Rank 4 card.'
		}
	},
	{
		title: 'Safe',
		rank: 2,
		text: 'Earn 1500 credits.'
	},
	{
		title: 'Gecko',
		rank: 2,
		text: 'Gecko is a bio-tech expert with a questionable morale compass. He\'ll install after-market upgrades for the right price. For 3000 credits, +1 Tech, draw a Tech 2+ card.'
	},
	{
		title: 'Arm and a Leg',
		rank: 2,
		text: 'Take 3 Damage. Draw an equipment card with a cost greater than or equal to 2000.'
	},
	{
		title: 'Armory',
		rank: 2,
		text: 'Draw 2 Combat 2+ Equipment cards.'
	},
	{
		title: 'Claw Machine',
		rank: 2,
		text: 'Draw the top card.'
	},
	{
		title: 'Dojo',
		rank: 2,
		text: 'Draw a Training card.'
	},
	{
		title: 'Meditation Chambers',
		rank: 1,
		text: 'At the end of this round anyone who is on this card begins meditation. Discard all ability cards. Turn this card sideways. Do not draw any ability cards next round. At the end of the next round, remove this card and +1 to any stat up to a maximum of 1. If any other players enter this card while you are meditating immediately discard it and do not gain a Skill point.'
	},
	{
		title: 'Slot Machine',
		rank: 1,
		text: 'Once per turn, place as many credits as you like on this card. Roll a dice. On a result of 4 or higher, double the credits. Otherwise lose the credits. This card has infinite uses.'
	},
	{
		title: 'Kitchen',
		rank: 1,
		text: 'Draw 1 Consumable.'
	},
	{
		title: 'Payday',
		rank: 1,
		text: 'Earn 500 Credits.'
	}
]
