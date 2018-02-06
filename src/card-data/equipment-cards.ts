export default [
	{
		type: 'Arm',
		title: 'Cheater\'s Sleeve',
		text: 'If this card is equipped to a Double Agent when they reveal, they immediately gain two Skill points that can be allocated however they choose.',
		cost: 300
	},
	{
		type: 'Chest',
		title: 'Tinker\'s Mech',
		text: 'This card can only be equipped to Tinker. If Tinker has more than 5 health, she may declare Tech cards as Combat cards.'
	},
	{
		type: 'Legs',
		title: 'Foot Wraps',
		requirements: {
			s: 2
		},
		text: 'Reduce the difficulty of any Skill Check that accepts Stealth by 1.',
		cost: 400
	},
	{
		type: 'Arm',
		title: 'Desert Eagle',
		text: '+2 Value to all \'Fire Pistol\' card played.',
		requirements: {
			c: 3
		},
		cost: 1000
	},
	{
		type: 'Arm',
		title: 'Binoculars',
		text: 'Once per round, you may reveal 1 card that is more than 1 space away.',
		requirements: {
			t: 1
		},
		cost: 200
	},
	{
		type: 'Arm',
		title: 'Overloaded Gauntlets',
		text: 'Once per turn roll a d6. On a roll of 1 or 2, take 1 Damage, otherwise draw 2 Combat cards and 2 Tech cards.',
		requirements: {
			t: 3,
			c: 1
		},
		cost: 1000
	},
	{
		type: 'Head',
		title: 'Ocular Implants',
		text: 'Whenever you share a space with another player you may look at their hand.',
		requirements: {
			t: 2
		},
		cost: 750
	}
]
