export default [
	{
		title: 'Assassinate CEO',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 30,
			applicableSkills: ['s', 't', 'm', 'c'],
			successText: 'The CEO is assassinated. If any non-stealth card were contributed, Alert Counter -4.',
			failureText: 'All Agents on this card lose 3 health. Alert Counter -2.'
		}
	},
	{
		title: 'Doomsday',
		rank: 4,
		skillCheck: {
			difficulty: 666,
			applicableSkills: [],
			successText: 'Not likely.',
			failureText: 'Reduce Health to 1.'
		}
	},
	{
		title: 'Data Center',
		rank: 4,
		skillCheck: {
			difficulty: 25,
			applicableSkills: ['t'],
			successText: 'The data is compromised.',
			failureText: 'System lockdown. Increase this card\'s difficulty by 5. Alert Counter -2.'
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
		title: 'Upload Virus',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 18,
			applicableSkills: ['t'],
			successText: 'You\'ve dampened their systems. Tech cards count double for the rest of the infiltration.',
			failureText: 'They\'ve detected your attempt. Alert Count -4.'
		}
	},
	{
		title: 'AI Terminal',
		rank: 4,
		skillCheck: {
			luck: 4,
			difficulty: 22,
			applicableSkills: ['t'],
			successText: 'You are now in control of the corporations AI. +1 Tech to the highest contributor.',
			failureText: 'The AI was a trojan horse. Your systems are infected. Don\'t draw Tech cards for the rest of the infiltration. Remove this card.',
			optional: true
		}
	},
	{
		title: 'Fenton',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 36,
			applicableSkills: ['m'],
			successText: 'The beast is slain. Draw from the equipment deck until you get a card that requires 3+ magic. Keep that card.',
			failureText: 'Take 5 Damage.',
			optional: true
		},
		flavorText: 'It\'s believed that Fenton was a god in the world he was summoned from. Now he guards the corporation\'s assets.'
	},
	{
		title: 'Noxious Gas',
		rank: 4,
		text: 'When this card is revealed, any player within 1 space of this card becomes poisoned. Remove this card. If a player is poisoned, they take 1 Damage at the start of each turn.'
	},
	{
		title: 'Stairs Up',
		rank: 4,
		text: 'These card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		rank: 4,
		text: 'These card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Death Squad',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 18,
			applicableSkills: ['c', 's'],
			successText: 'Discard 6 points worth of Tech card to imprint their combat training onto a drive. +1 Combat.',
			failureText: 'Take 2 Damage. When the first player leaves this card, this card swaps with the card they move to.'
		}
	},
	{
		title: 'Siren\'s Call',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'You break the Siren\'s seduction.',
			failureText: 'You give the Siren\'s anything they ask for. Discard 1 equipped item. If you have none, take 2 Damage and remove this card.'
		},
		snare: true
	},
	{
		title: 'Gadot',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 30,
			applicableSkills: ['m', 'c', 's'],
			successText: 'You\'ve slain the dragon. All players on this space, +1 Stat to any of the applicable Skills',
			failureText: 'Gadot incinerates your clothing. Take 4 Damage or discard one piece of equipment.'
		},
		snare: true
	},
	{
		title: 'Getaway Motorcycle',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 12,
			applicableSkills: ['t'],
			successText: 'You\'ve hot-wired the bike. Move up to 6 spaces at the end of the round. Do not reveal cards along the way.',
			failureText: 'You\'ve reduced the bike to scrap metal. Remove this card.'
		}
	},
	{
		title: 'Model C Squad',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['c', 't'],
			successText: 'If more than half of contributed points were Tech, you\'ve rewired the combat units. Draw 2 Tech cards.',
			failureText: 'Take 3 Damage.'
		},
		flavorText: 'These combat robots are some of the most sophisticated and deadly models on the market.'
	},
	{
		title: 'Minefield',
		rank: 3,
		skillCheck: {
			luck: 3,
			difficulty: 16,
			applicableSkills: ['t'],
			successText: 'The mines are defused.',
			failureText: 'The mines detonates. Take 6 damage. Each adjacent card is removed from the board. Remove this card.'
		}
	},
	{
		title: 'Elevator',
		rank: 3,
		text: 'When you end a round on this card, you may start the next round and the Stairs Up or Stairs Down card on any floor'
	},
	{
		title: 'R&D Lab',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 21,
			applicableSkills: ['c', 't', 's'],
			successText: 'If more than 10 combat points were contributed, the lab is destroyed. Remove this card. Otherwise, you were able to recover equipment from the lab. Draw 4 cards from the equipment deck and keep 2.',
			failureText: 'Alert Counter -2. Remove this card.'
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
		title: 'Hell Dogs',
		rank: 3,
		skillCheck: {
			difficulty: 9,
			applicableSkills: ['m', 'c'],
			successText: 'The dogs plague the area with demonic energy. Don\'t draw any Magic cards next turn.',
			failureText: 'Take 2 Damage.'
		}
	},
	{
		title: 'Insanity Chamber',
		rank: 3,
		skillCheck: {
			difficulty: 12,
			applicableSkills: ['m'],
			successText: 'You maintain your sanity.',
			failureText: 'You\'ve lost your sanity. Shuffle and place all ability cards face down along with any new cards you acquire. When you discard a card, reveal it and use it\'s effect. You may still play cards towards a Skill Check, but do not reveal them until you have finished contributing. Treat them as if they had been played in the order that you reveal them. This effect last until the end of the Infiltration.'
		}
	},
	{
		title: 'The Crusher',
		rank: 3,
		skillCheck: {
			difficulty: 5,
			applicableSkills: [],
			successText: 'Good Luck.',
			failureText: '-2 Health. Remove this card.'
		}
	},
	{
		title: 'Vines of Thalia',
		rank: 3,
		skillCheck: {
			difficulty: 9,
			applicableSkills: ['m', 'c'],
			successText: 'The vines recoil.',
			failureText: 'The vines tighten their grip. +5 to this card\'s difficulty.'
		},
		snare: true
	},
	{
		title: 'Stairs Up',
		rank: 3,
		text: 'These card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		rank: 3,
		text: 'These card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Sonar Drone',
		rank: 3,
		skillCheck: {
			difficulty: 12,
			applicableSkills: ['s', 't'],
			successText: 'If more than half of contributed points were Tech, reveal surrounding cards.',
			failureText: 'Alert Counter -1 for each player within two spaces of this card.'
		}
	},
	{
		title: 'Dragon Eggs',
		rank: 3,
		skillCheck: {
			luck: 4,
			difficulty: 14,
			applicableSkills: ['m', 's'],
			successText: 'You manage to steal the valuable eggs. Gain 3000 credits.',
			failureText: 'You\'ve alerted their mother. Replace this card with "Gadot". If she\'s already in play, replace it with any Rank 4 card.'
		}
	},
	{
		title: 'Topsy and Turvy',
		rank: 2,
		skillCheck: {
			difficulty: 5,
			applicableSkills: [],
			successText: 'All rolls count for the Agents for the rest of the infiltration.',
			failureText: 'All rolls count against the Agents for the rest of the infiltration.'
		},
		flavorText: 'One twin a maniacal magic-user and the other a calculated Math wiz.',
		text: 'After players are done contributing cards, roll a D6. If the result is odd, Magic and Combat count as applicable. If the result is even Stealth and Tech count as applicable.',
	},
	{
		title: 'Pools of Jibwa',
		rank: 2,
		text: 'Whenever you start a turn on this card, draw 3 magic ability cards. If your magic stat is less than 3, take 1 damage.'
	},
	{
		title: 'Tree of Life',
		rank: 2,
		skillCheck: {
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'The tree restores 2 health to all players within 2 spaces.',
			failureText: 'The tree withers. Remove this card.',
			optional: true
		}
	},
	{
		title: 'Magic Rift',
		rank: 2,
		text: 'If your magic stat is 2+ you may pass through this card as if it were empty. Otherwise, take 2 damage whenever you enter this card, regardless of whether or not it was revealed when you entered.'
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
		title: 'Gecko',
		rank: 2,
		text: 'Gecko is a bio-tech expert with a questionable morale compass. He\'ll install after-market upgrades for the right price. For 3000 credits, increase your Tech stat by 1 up to a maximum of 3. After a player takes Gecko up on his offer, remove this card.'
	},
	{
		title: 'Stairs Up',
		rank: 2,
		text: 'These card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		rank: 2,
		text: 'These card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Lockdown',
		rank: 2,
		skillCheck: {
			luck: 2,
			difficulty: 10,
			applicableSkills: ['t', 's'],
			successText: 'Remove this card.',
			failureText: 'Alert Counter -1.'
		},
		text: 'Once this card is revealed, no player may exit the infiltration until it is removed by successfully completing the Skill Check.'
	},
	{
		title: 'Metal Detector',
		rank: 1,
		text: 'Each time an Agent enters this card, -1 Alert Counter for each piece of equipment they have equipped.'
	},
	{
		title: 'Stairs Up',
		rank: 1,
		text: 'These card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		rank: 1,
		text: 'These card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Medical Tent',
		rank: 1,
		text: '+1 Health if you end your turn on this card. Remove the card.'
	},
	{
		title: 'Meditation Chambers',
		rank: 1,
		text: 'At the end of this round anyone who is on this card begins meditation. Discard all ability cards. Turn this card sideways. Do not draw any ability cards next round. At the end of the next round, remove this card and +1 to any stat up to a maximum of 1. If any other players enter this card while you are meditating '
	},
	{
		title: 'Security Camera',
		rank: 1,
		skillCheck: {
			difficulty: 8,
			applicableSkills: ['c', 't'],
			successText: 'If more than 2 tech points were contributed. Reveal an adjacent card.',
			failureText: 'Alert Counter -1'
		}
	},
	{
		title: 'Slot Machine',
		rank: 1,
		text: 'Once per turn, place as many credits as you like on this card. Roll a dice. On a result of 4 or higher, double the credits. Otherwise lose the credits.'
	},
	{
		title: 'Watchtower',
		rank: 1,
		skillCheck: {
			difficulty: 6,
			applicableSkills: ['s', 'c'],
			successText: 'Capture the watchtower. Reveal adjacent cards. Don\'t remove this card. Instead, turn it sideways. Any character on this card may contribute cards to a Skill Check within two spaces.',
			failureText: 'Take 1 Damage.',
			optional: true
		}
	},
	{
		title: 'Security Guard',
		rank: 1,
		skillCheck: {
			luck: 1,
			difficulty: 3,
			applicableSkills: ['c', 's', 'm'],
			successText: 'If any non-stealth cards were played, Alert Counter -1. If a combat card was played, remove this card.',
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
		title: 'EMP Trap',
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
