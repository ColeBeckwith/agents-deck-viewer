export default [
	{
		title: 'CEO',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			luck: 3,
			difficulty: 30,
			applicableSkills: ['s', 't', 'm', 'c'],
			successText: 'The CEO is assassinated. If any non-stealth card were contributed, Alert Counter -4.',
			failureText: 'Take 3 Damage. Alert Counter -2.'
		}
	},
	{
		title: 'Data Center',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			difficulty: 25,
			applicableSkills: ['t'],
			successText: 'The data is compromised.',
			failureText: 'System lockdown. Increase this card\'s difficulty by 5. Alert Counter -2.'
		}
	},
	{
		title: 'Grand Heist',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			luck: 1,
			difficulty: 25,
			applicableSkills: ['s'],
			successText: 'The valuables have been secured. +2000 Credits.',
			failureText: 'We only had one shot at this. Remove this card.'
		}
	},
	{
		title: 'Kygo',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			luck: 2,
			difficulty: 25,
			applicableSkills: ['c'],
			successText: 'The Corporation\'s most deadly operator is put to rest.',
			failureText: 'Take 7 Damage.'
		},
		snare: true
	},
	{
		title: 'The Nexus',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			difficulty: 25,
			applicableSkills: ['m'],
			successText: 'Without it\'s source of Magic, the Corporation is weakened.',
			failureText: 'The Nexus releases a burst of energy. Every player on the board takes 2 Damage.'
		}
	},
	{
		title: 'Warehouse Weak Point',
		rank: 4,
		undrawable: true,
		criticalSystem: true,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['t', 'c', 'm'],
			successText: 'The pillar crumbles to the floor. Alert Counter -1.',
			failureText: 'The pillar stands firm. Alert Counter -1.'
		},
		count: 6
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
		revealText: 'Any player within 1 space of this card gains 2 points of Poison. Remove this card.'
	},
	{
		title: 'Stairs Up',
		undrawable: true,
		rank: 4,
		text: 'This card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		undrawable: true,
		rank: 4,
		text: 'This card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
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
		title: 'Chimera',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 8,
			applicableSkills: ['m', 'c', 's'],
			successText: 'If at least one Magic, Combat and Stealth card were not played. This card is not removed.',
			failureText: 'Take 3 Damage.'
		},
		snare: true
	},
	{
		title: 'Siren\'s Call',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'You break the Siren\'s seduction.',
			failureText: 'You give the Siren\'s whatever they ask for. Discard 1 equipped item. If you have none, take 2 Damage and remove this card.'
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
		title: 'Undead Nightmare',
		rank: 4,
		skillCheck: {
			difficulty: 24,
			applicableSkills: ['m', 'c'],
			successText: 'The nightmare ends... for now.',
			failureText: 'The infection spreads. Treat the surrounding cards as if they were \'Undead Nightmare\''
		}
	},
	{
		title: 'Time Loop',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['m', 't'],
			successText: 'Alert Counter +3',
			failureText: 'If there are any player-controlled spaces that started the Infiltration with Encounter cards, place an Encounter card of the same rank they started with on that space. Alert Counter +1 for every 2 cards added.'
		}
	},
	{
		title: 'The Seeker',
		rank: 4,
		skillCheck: {
			luck: 1,
			difficulty: 23,
			applicableSkills: ['m'],
			successText: 'The Seeker is defeated.',
			failureText: 'The Seeker pinpoints the location of all Agents. All Agents discard all Stealth ability cards.'
		},
		revealText: 'The Seeker relays Agent locations to other Corporation units. All Stealth cards have an effective base value of 0.'
	},
	{
		title: 'Black ICE',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 20,
			applicableSkills: ['t'],
			successText: 'The ICE is removed. All players draw 2 Tech cards.',
			failureText: 'The ICE sends an alert through the mainframe. Alert Counter -2.'
		},
		revealText: 'While this card is on the board, all players must discard 3 Tech cards after each Draw phase.'
	},
	{
		title: 'Ezra the Viper',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['m', 'c'],
			successText: 'Discard 5 points of Tech, to distill an antivenom. All Agent\'s Poison effects are cured.',
			failureText: 'Ezra\'s venom courses through you. Take 1 point of Poison.'
		}
	},
	{
		title: '2 Ton Jack',
		rank: 3,
		skillCheck: {
			luck: 3,
			difficulty: 20,
			applicableSkills: ['s', 'c'],
			successText: 'The 4000 pound Gorilla has met its match.',
			failure: 'Jack throws you back. Move 5 spaces in the direction that you came from. Ignore snare effects. If you reach a barrier, take 1 Damage for each space you did not move.'
		}
	},
	{
		title: 'Armistice',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['c'],
			successText: 'The Armistice ends.',
			failureText: 'The Armistice stands. Discard all Combat cards.'
		},
		revealText: 'Combat discard effects may not be used, and no Combat cards can be played except on this card.'
	},
	{
		title: 'Torture Chamber',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 10,
			applicableSkills: ['c', 'm'],
			successText: 'You withstand the torture. Keep this card on the board. When it has been resolved three times, remove it. If another Agent enters this card after the first time it has been resolved, remove it immediately.',
			failureText: 'You give up information about your fellow Agents. Alert Counter -1. Take 1 Damage.'
		},
		snare: true
	},
	{
		title: 'Magic Channel',
		rank: 3,
		skillCheck: {
			difficulty: 10,
			applicableSkills: ['m'],
			successText: 'The channel is closed. You may now pass freely.',
			failureText: 'The channel strengthens.'
		},
		revealText: 'Whenever a player enters the same row or column as this card, take Damage equal to 1 + the number of times this skill Check has been failed.'
	},
	{
		title: 'Simulation',
		rank: 3,
		skillCheck: {
			difficulty: 40,
			applicableSkills: ['t', 'm'],
			successText: 'You break free of the simulation.',
			failureText: 'Draw a Rank 2 card and immediately resolve it as if you were on it. Reduce \'Simulation\'s difficulty by 10.'
		},
		snare: true
	},
	{
		title: 'Human Resources Database',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 28,
			applicableSkills: ['t', 's'],
			successText: 'The highest contributor may look at another players contract.',
			failureText: 'Alert Counter -2. Remove this card.',
			optional: true
		}
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
		title: 'Gatling Installment',
		rank: 3,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['c', 's'],
			successText: 'Overtake the installment. Remove one adjacent card. Draw 2 Combat cards.',
			failureText: 'Take 4 Damage.'
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
		title: 'Enemy Reinforcements',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['m', 't', 'c', 's'],
			successText: 'Enemy reinforcements have been cut off.',
			failureText: ''
		},
		revealText: 'Each adjacent Skill Check has +5 difficulty.'
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
		title: 'Elevator',
		rank: 3,
		text: 'When you end a round on this card, you may start the next round at the Stairs Up or Stairs Down card on any floor',
		undrawable: true
	},
	{
		title: 'Stairs Up',
		undrawable: true,
		rank: 3,
		text: 'This card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		undrawable: true,
		rank: 3,
		text: 'This card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
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
		title: 'Chopper Gunner',
		rank: 3,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['t', 'c'],
			successText: 'The Chopper goes down with a crash. -1 Alert Counter.',
			failureText: 'A hail of bullets rain down on you. -2 Health.'
		}
	},
	{
		title: 'Ice Troll',
		rank: 3,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['m', 'c'],
			successText: 'You defeat the Troll, but not before he encases your legs in ice. You cannot move next turn.',
			failureText: 'The cold intensifies. -1 Health if you are within X number of spaces where X is the number of times this card has been failed.'
		}
	},
	{
		title: 'Troll',
		rank: 3,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['m', 'c'],
			successText: 'The Troll grows tired of fighting and retreats to his slumber.',
			failureText: 'The Troll swings his club. -3 Health.'
		}
	},
	{
		title: 'Topsy and Turvy',
		rank: 3,
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
		title: 'Balancing Act',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 6,
			applicableSkills: ['m', 's'],
			successText: 'If the total contributed is more than 10, consider this Skill Check failed.',
			failureText: 'You fall to the ground below and sprain an ankle. -1 Health and lose next movement.'
		}
	},
	{
		title: 'Dirty Cop',
		rank: 2,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['c', 's'],
			successText: 'The Cop buggers off to extort someone else.',
			failureText: 'Alert Counter -1. You may spend 500 credits to count this as a success instead.'
		}
	},
	{
		title: 'Pools of Jibwa',
		rank: 2,
		text: 'Whenever you start a turn on this card, draw 3 Magic Ability cards. If your magic stat is less than 3, take 1 Damage.'
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
		title: 'Stairs Up',
		undrawable: true,
		rank: 2,
		text: 'This card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		undrawable: true,
		rank: 2,
		text: 'This card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
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
		revealText: 'No player may exit the infiltration until this card is removed.'
	},
	{
		title: 'ICE',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 10,
			applicableSkills: ['t'],
			successText: 'The ICE is circumvented.',
			failureText: 'The ICE sends an alert to the facility. Alert Counter -1.'
		},
		revealText: 'While this card is on the board, all players must discard a Tech card after each Draw phase.'
	},
	{
		title: 'Metal Detector',
		rank: 2,
		text: 'Each time an Agent enters this card, -1 Alert Counter for each piece of Equipment they have equipped.'
	},
	{
		title: 'Street Punks',
		rank: 1,
		skillCheck: {
			difficulty: 8,
			applicableSkills: ['m', 'c', 's'],
			successText: 'The punks take off.',
			failureText: '-100 Credits.'
		}
	},
	{
		title: 'Stairs Up',
		undrawable: true,
		rank: 1,
		text: 'This card links with the Stairs Down card in the floor above. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Stairs Down',
		undrawable: true,
		rank: 1,
		text: 'This card links with the Stairs Up card in the floor below. Move through both cards as if they were empty.',
		count: 2
	},
	{
		title: 'Centaurs',
		rank: 1,
		text: 'Centaurs do not abide violence. Any time you are on this card, you must discard all Combat cards.'
	},
	{
		title: 'Medical Tent',
		rank: 1,
		text: '+1 Health if you end your turn on this card. Remove the card.'
	},
	{
		title: 'Security Camera',
		rank: 1,
		skillCheck: {
			difficulty: 8,
			applicableSkills: ['c', 't', 's'],
			successText: 'If more than 2 tech points were contributed. Reveal an adjacent card.',
			failureText: 'Alert Counter -1'
		}
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
			failureText: 'You barrier holds.',
		},
		revealText: 'You may only leave this card from the direction you entered.'
	},
	{
		title: 'Guard Dog',
		rank: 1,
		skillCheck: {
			difficulty: 5,
			applicableSkills: ['c', 's', 'm'],
			successText: 'The dogs whimpers away.',
			failureText: 'The dog tears at your flesh and barks loudly. -1 Health. -1 Alert Counter.'
		}
	},
	{
		title: 	'Mage Apprentice',
		rank: 1,
		skillCheck: {
			difficulty: 5,
			applicableSkills: ['m', 'c'],
			successText: 'The Apprentice is defeated.',
			failureText: 'Take 1 Damage.'
		}
	},
	{
		title: 'EMP Trap',
		rank: 1,
		text: 'Immediately discard all tech cards, and do not draw any while you are on this card.'
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
