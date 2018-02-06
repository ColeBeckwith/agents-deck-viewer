export default [
	{
		name: 'Oro Buro',
		bio: 'An Argentinian from the Favela. One of the strongest known magic-users. A polarizing figure in South America where some consider him a terrorist and others a savior.',
		specializations: ['m'],
		startingStats: {
			m: 2,
			t: 0,
			s: 0,
			c: 0
		},
		maxStats: {
			m: 4,
			t: 0,
			s: 2,
			c: 2
		},
		skills: {
			m: [
				'Battle Mage: You may declare a Magic card as a Combat card with a value of 1.',
				'',
				'',
				'Resurrection: Once per infiltration, you may restore 3 HP to a downed player.'
			],
			t: [],
			s: [
				'',
				'Guerilla Fighter: Discard a stealth card and draw a combat card at any time.'
			],
			c: [
				'',
				'War Chief: During a Skill Check, you may double the value of a Combat card played by another Agent.'
			]
		}
	},
	{
		name: 'Ron Jakobs',
		bio: 'An American mercenary. Ron has spent the better part of the last 15 years in a combat zone. He\'s got a few screws loose, but his name is synonymous with firepower.',
		specializations: ['c'],
		startingStats: {
			m: 0,
			t: 0,
			s: 0,
			c: 2,
		},
		maxStats: {
			m: 0,
			t: 2,
			s: 2,
			c: 4
		},
		skills: {
			m: [],
			t: [
				'',
				''
			],
			s: [
				'',
				''
			],
			c: [
				'',
				'',
				'Adrenaline Junkie: Draw two Combat cards when you pass a Skill Check.',
				'Ambidextrous: Equip up to two Arm Equipment pieces.'
			]
		}
	},
	{
		name: 'Clyde Kelly',
		bio: 'Formerly the CTO of the Corporation, the largest multi-national corporation. He quit abruptly and his motives are mysterious.',
		specializations: ['t'],
		startingStats: {
			m: 0,
			t: 2,
			s: 0,
			c: 0
		},
		maxStats: {
			m: 0,
			t: 4,
			s: 2,
			c: 2
		},
		skills: {
			m: [],
			t: [
				'Wealthy: Earn 1.5x credits whenever you gain credits.',
				'',
				'',
				'Inside Man: Reveal up to 10 Encounter cards at the start of an Infiltration.'
			],
			s: [
				'Mysterious: No other player may look at your Contract.',
				''
			],
			c: [
				'',
				''
			]
		}
	},
	{
		name: 'HDN1',
		bio: 'HDN1, High Density Neurobot, was a one-off experiment conducted by the corporation. An attempt at creating an Artificial Intelligence using a neural network that was nearly as sophisticated as the human brain. The researchers were puzzled when HDN1 began exhibiting magical behavior previously thought to only be possible by high intellect humans. No one is sure how he got out or why he wants to get back into the corporation.',
		specializations: ['m', 't'],
		startingStats: {
			m: 1,
			t: 1,
			s: 0,
			c: 0
		},
		maxStats: {
			m: 4,
			t: 4,
			s: 0,
			c: 0
		},
		skills: {
			m: [
				'',
				'',
				'',
				''
			],
			t: [
				'',
				'',
				'Unattached: After a Draw Cards Phase, you may discard all the cards drawn and re-draw.',
				''
			],
			s: [],
			c: []
		}
	},
	{
		name: 'Ghost',
		bio: 'An Egyptian boy attacked by dark magic during warfare, but preserved through dark magic. He\'s been stuck in limbo for more than twenty years and doesn\'t appear to have aged. He\'s able to pass freely between the world of the living and the world of the dead.',
		specializations: ['m', 's'],
		startingStats: {
			m: 1,
			t: 0,
			s: 1,
			c: 0
		},
		maxStats: {
			m: 4,
			t: 0,
			s: 4,
			c: 0
		},
		skills: {
			m: [
				'',
				'',
				'',
				'Ethereal: Once per Infiltration, ignore incoming damage.'
			],
			t: [],
			s: [
				'',
				'',
				'',
				''
			],
			c: []
		}
	}
]
