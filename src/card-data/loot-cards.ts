export default [

	// GOLD

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
		text: 'Earn 35 credits.'
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
		title: 'Guru',
		rank: 3,
		text: 'Draw a Training card of your choice.'
	},
	{
		title: 'Fire Sale',
		rank: 3,
		text: 'Draw the top 5 cards. Purchase any of them at half off.'
	},

	// SILVER

	{
		title: 'Magic Bag',
		rank: 2,
		text: 'Draw the top 4 cards. Keep any of them that have a Magic requirement.'
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
			successText: 'You manage to steal the valuable eggs. Gain 30 credits.',
			failureText: 'You\'ve alerted their mother. Replace this card with "Gadot". If she\'s already in play, replace it with any Rank 4 card.'
		}
	},
	{
		title: 'Safe',
		rank: 2,
		text: 'Earn 15 credits.'
	},
	{
		title: 'Gecko',
		rank: 2,
		text: 'Gecko is a bio-tech expert with a questionable morale compass. He\'ll install after-market upgrades for the right price. For 10 credits, +1 Tech Level, draw a Tech 2+ card.'
	},
	{
		title: 'Arm and a Leg',
		rank: 2,
		text: 'Take 3 Damage. Draw an equipment card with a cost greater than or equal to 20.'
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
		title: 'Library',
		rank: 2,
		text: 'Spend your next turn studying. Take no actions. Draw a Training card. This card can be used twice.'
	},

	// BRONZE

	{
		title: 'Rigged Safe',
		rank: 1,
		text: 'Take 1 Damage. +8 Credits.'
	},
	{
		title: 'Dojo',
		rank: 1,
		text: 'Draw a Training card.'
	},
	{
		title: 'Meditation Chambers',
		rank: 1,
		text: 'At the end of this round anyone who is on this card begins meditation. Discard all ability cards. Turn this card sideways. Do not draw any ability cards next round. At the end of the next round, remove this card and +1 to any stat up to a maximum of 1. If any other Player enter this card while you are meditating immediately discard it and do not gain a Skill point.'
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
		text: '+5 Credits.'
	},
	{
		title: 'Medical Tent',
		rank: 1,
		text: '+1 Health to all occupants at the end of the round. Remove this card.'
	},
	{
		title: 'Black Ball',
		rank: 1,
		text: 'Declare an Equipment type. If the top card of the Equipment deck is of that type, keep it. Repeat until you guess incorrectly.'
	}
]
