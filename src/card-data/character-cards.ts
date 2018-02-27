export default [
	{
		name: 'Cane Burro',
		bio: 'An Argentinian from the slums. One of the strongest known magic-users. A polarizing figure in South America where some consider him a terrorist and others a savior.',
		specializations: ['m'],
		startingStats: {
			m: 2,
			t: 0,
			s: 0,
			c: 0,
			health: 20,
			credits: 8
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
				'Savior: Once per infiltration, you may restore 3 HP to a downed player.'
			],
			t: [],
			s: [
				'',
				'Guerilla: Discard a stealth card and draw a combat card at any time.'
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
			health: 25,
			credits: 15
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
				'Ambidextrous: Equip up to two Arm Equipment pieces.'
			],
			s: [
				'',
				''
			],
			c: [
				'',
				'',
				'Adrenaline Junkie: Draw two Combat cards when you pass a Skill Check.',
				'Brute Force: Take 1 Damage and make your Combat cards applicable towards a Skill Check.'
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
			c: 0,
			health: 12,
			credits: 25
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
			c: 0,
			health: 14,
			credits: 0
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
			c: 0,
			health: 20,
			credits: 2
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
				'Head Start: Start an Infiltration up to 5 spaces from any Starting Point.'
			],
			c: []
		}
	},
	{
		name: 'Tinker',
		bio: 'A steampunk clad mech pilot. Tinker likes to let her inventions do the fighting for her.',
		specializations: ['c', 't'],
		startingStats: {
			m: 0,
			t: 1,
			s: 0,
			c: 1,
			health: 10,
			credits: 10
		},
		maxStats: {
			m: 0,
			t: 4,
			s: 0,
			c: 4
		},
		skills: {
			m: [],
			t: [
				'',
				'',
				'',
				'Black Market Trader: Tinker can open a bid at 200 less than the listed price during the Black Market phase.'
			],
			s: [],
			c: [
				'',
				'',
				'Scrappy: For each point of Damage you take, draw a Combat card.',
				''
			]
		}
	},
	{
		name: 'Yuri Takashi',
		bio: 'Yuri grew up in a wealthy family in Tokyo, who trained in the stealth arts in respect to their Ninja heritage. Rebelling against her conservative family and seeking a thrill, Yuri began using her training to steal from the other wealthy families. She eventually became one of the highest paid contractors for espionage missions.',
		specializations: ['s'],
		startingStats: {
			m: 0,
			t: 0,
			s: 2,
			c: 0,
			health: 13,
			credits: 20
		},
		maxStats: {
			m: 1,
			t: 0,
			s: 4,
			c: 3
		},
		skills: {
			m: [
				''
			],
			t: [],
			s: [
				'',
				'Light Feet: Yuri is not affected by Snare effects.',
				'',
				'Made in the Shade: Yuri may use her move action to move to the location of another Agent.'
			],
			c: [
				'',
				'',
				'Assassin: If there are no players within 1 space of Yuri, reduce Skill Check difficulty by 7.'
			]
		}
	},
	{
		name: 'Decker',
		bio: 'A former MI6 agent. Decker was burned by the agency when she was no longer useful. After surviving the fallout, she turned to the highest bidder.',
		specializations: ['c', 's'],
		startingStats: {
			m: 0,
			t: 0,
			s: 1,
			c: 1,
			health: 18,
			credits: 3
		},
		maxStats: {
			m: 0,
			t: 0,
			s: 4,
			c: 4
		},
		skills: {
			m: [],
			t: [],
			s: [
				'',
				'Exiled: If you have less than 3 Favor, draw 2 extra Stealth cards each turn.',
				'',
				'Freedom: Decker may spend 15000 credits to get rid of her contract if she is not a DA.'
			],
			c: [
				'',
				'',
				'Brawler: Decker gets +2 to rolls when in combat with another player.',
				''
			]
		}
	},
	{
		name: 'Slade',
		bio: 'A detective working on a hunch that something is amiss at the Corporation.',
		specializations: ['t', 's'],
		startingStats: {
			m: 0,
			t: 1,
			s: 1,
			c: 0,
			health: 10,
			credits: 18
		},
		maxStats: {
			m: 0,
			t: 4,
			s: 4,
			c: 0
		},
		skills: {
			m: [],
			t: [
				'',
				'',
				'',
				'Detective: When Slade first reaches this skill level, she may look at another player\'s Contract.'
			],
			s: [
				'',
				'',
				'',
				''
			],
			c: []
		}
	},
	{
		name: 'The Guardian',
		bio: 'An animated set of armor.',
		specializations: ['m', 'c'],
		startingStats: {
			m: 1,
			t: 0,
			s: 0,
			c: 1,
			health: 30,
			credits: 0
		},
		maxStats: {
			m: 4,
			t: 0,
			s: 0,
			c: 4
		},
		skills: {
			m: [
				'',
				'',
				'',
				'Foresight: When the Guardian activates a Loot card, he may look at the top 6 cards of the Equipment deck and rearrange them.'
			],
			t: [],
			s: [],
			c: [
				'',
				'',
				'',
				'Armored: Reduce all incoming Damage by 1.'
			]
		}
	}
]
