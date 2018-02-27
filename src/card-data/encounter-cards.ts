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
			successText: 'The valuables have been secured. +20 Credits.',
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
		revealText: 'The Seeker relays Agent locations to other Corporation units. All Stealth cards have a Base Value of 0.'
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
			successText: 'Discard 4 points of Tech to distill an antivenom and cure all Agent\'s Poison effects.',
			failureText: 'Ezra\'s venom courses through you. Take 1 point of Poison.'
		}
	},
	{
		title: 'Hydra',
		rank: 4,
		skillCheck: {
			luck: 3,
			difficulty: 20,
			applicableSkills: ['c', 'm'],
			successText: 'The Hydra regenerates. Increase this cards difficulty by 10.',
			failureText: 'Take 2 Damage.'
		}
	},
	{
		title: 'Signal Interceptor',
		rank: 4,
		skillCheck: {
			luck: 1,
			difficulty: 24,
			applicableSkills: ['t'],
			successText: 'The interceptor is shut down. Comms are clear.',
			failureText: 'Alert Counter -1.'
		},
		revealText: 'Each round that an Agent speaks, Alert Counter -1.'
	},
	{
		title: 'Dwarf Tank',
		rank: 4,
		skillCheck: {
			luck: 2,
			difficulty: 28,
			applicableSkills: ['t', 'c', 's'],
			successText: 'The Tank is destroyed. Replace this card with \'Seven Dwarves\' if it is not already in play.',
			failureText: 'Take 2 Damage.'
		}
	},
	{
		title: 'Space Cowboy',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['t', 's', 'c'],
			successText: 'See you Space Cowboy... +5 Credits.',
			failureText: '-10 Credits.'
		}
	},
	{
		title: 'Orc Chieftain',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 20,
			applicableSkills: ['m', 'c', 's'],
			successText: 'The Orc Chieftain finds you unworthy of chase.',
			failureText: 'Take 2 Damage. The Chieftain damages your gear. You may not use Equipment abilities for the rest of the Infiltration.'
		},
		text: 'No Equipment abilities may be used on this Skill Check.'
	},
	{
		title: '2 Ton Jack',
		rank: 3,
		skillCheck: {
			luck: 3,
			difficulty: 20,
			applicableSkills: ['s', 'c'],
			successText: 'The 4000 pound Gorilla has met its match.',
			failureText: 'Jack throws you back. Move 5 spaces in the direction that you came from. Ignore snare effects. If you reach a barrier, take 1 Damage for each space you did not move.'
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
		revealText: 'No Combat cards can be played except on this card.'
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
			failureText: 'Enemy reinforcements strengthen. +10 to adjacent Skill Checks instead of 5.'
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
		title: 'Magic Radiation',
		rank: 3,
		skillCheck: {
			luck: 1,
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'You absorb the radiation. Take 1 Damage. The highest contributor may optionally remove this card. If you initiate this Skill Check 3 turns in a row, gain 1 Magic Point. Remove this card after a player has gained a Magic Point from it.',
			failureText: 'If you have 0 Magic Points, treat this as a success instead. Take 3 Damage.'
		}
	},
	{
		title: 'Nuclear Radiation',
		rank: 3,
		skillCheck: {
			difficulty: 16,
			applicableSkills: ['m', 't'],
			successText: 'You resist the radiation.',
			failureText: 'You become irradiated. Gain 2 Points of Poison. Reduce the difficulty of all Skill Checks you are on by 6.'
		}
	},
	{
		title: 'Tree of Death',
		rank: 3,
		skillCheck: {
			difficulty: 13,
			applicableSkills: ['m', 'c'],
			successText: 'The tree is destroyed.',
			failureText: 'Take 1 Damage.'
		},
		revealText: 'Any time an Agent enters this space or an adjacent one, take 1 Damage.'
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
			failureText: 'Take 2 Damage. Remove this card.'
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
		title: 'Compactor',
		rank: 3,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['s', 't', 'm'],
			successText: 'You escape the compactor. Ignore this cards snare effect on your next turn. Do not remove this card.',
			failureText: 'The gears crank as the compactor compresses everything inside. The third time this Skill Check is failed, all occupants are reduced to 0 Health. Remove this card.'
		},
		snare: true
	},
	{
		title: 'Sonar Drone',
		rank: 3,
		skillCheck: {
			difficulty: 12,
			applicableSkills: ['s', 't'],
			successText: 'If more than half of contributed points were Tech, reveal surrounding cards.',
			failureText: 'Alert Counter -1 for each player within two spaces of this card.'
		},
		revealText: 'Alert Counter -1 for each player within one space of this card.'
	},
	{
		title: 'Chopper Gunner',
		rank: 3,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['t', 'c'],
			successText: 'The Chopper goes down with a crash. -1 Alert Counter.',
			failureText: 'A hail of bullets rain down on you. Take 2 Damage.'
		}
	},
	{
		title: 'Ice Troll',
		rank: 3,
		skillCheck: {
			difficulty: 18,
			applicableSkills: ['m', 'c'],
			successText: 'You defeat the Troll, but not before he encases your legs in ice. You cannot move next turn.',
			failureText: 'The cold intensifies. Take 1 Damage if you are within X number of spaces where X is the number of times this card has been failed.'
		}
	},
	{
		title: 'Troll',
		rank: 3,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['m', 'c'],
			successText: 'The Troll grows tired of fighting and retreats to his slumber.',
			failureText: 'The Troll swings his club. Take 3 Damage.'
		}
	},
	{
		title: 'EMP Supernova',
		rank: 3,
		revealText: 'If a player is standing on this card, all players must discard all Tech ability cards and unequip any equipment with a Tech requirement. Remove this card.'
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
		title: 'Uruk',
		rank: 3,
		skillCheck: {
			luck: 1,
			difficulty: 15,
			applicableSkills: ['m', 'c', 's'],
			successText: 'Draw Bite of Uruk from the Equipment deck if it is available.',
			failureText: 'Take 1 Damage. Draw Bite of Uruk from teh Equipment deck. Equip it immediately. You may not unequip it.'
		}
	},
	{
		title: 'Summoner',
		rank: 3,
		skillCheck: {
			difficulty: 14,
			applicableSkills: ['m'],
			successText: 'The summoner is stopped before she has a chance to perform her ritual.',
			failureText: 'Replace this card with a Rank 2 Encounter card. Replace each adjacent Encounter with one equal to its rank +1.'
		},
		revealText: 'If this card is still on the board at the end of the round, treat it as if the Skill Check is failed.'
	},
	{
		title: 'Balancing Act',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 6,
			applicableSkills: ['m', 's'],
			successText: 'If the total contributed is more than 10, consider this Skill Check failed.',
			failureText: 'You fall to the ground below and sprain an ankle. Take 1 Damage and lose next movement.'
		}
	},
	{
		title: 'Lockdown',
		rank: 3,
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
		title: 'Neon Demon',
		rank: 3,
		skillCheck: {
			luck: 2,
			difficulty: 16,
			applicableSkills: ['t', 'm'],
			successText: 'The Demon is subdued. Replace this card with \'Neon Imp\' if it\'s not in play. Otherwise remove this card.',
			failureText: 'Take 2 Damage.'
		}
	},
	{
		title: 'Nanomachines',
		rank: 3,
		skillCheck: {
			luck: 1,
			difficulty: 15,
			applicableSkills: ['t'],
			successText: 'The Nanomachines are under your control. Draw 2 Tech cards.',
			failureText: 'The Nanomachines corrupt your equipment. Discard all Equipment with a Tech requirement.'
		}
	},
	{
		title: 'Ice Wall',
		rank: 3,
		revealText: 'Any player on this space is frozen and cannot move off of it. No player may move onto this card. At the end of each turn, the most recently placed version of this card spreads in a random direction. If that card is not already an Ice Wall, make it one. This card and every version of it can be removed at any time by discarding one of the following cards while standing on the wall or adjacent to it: \'Inferno\', \'Flames\' or \'Frag Grenade\''
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
		title: 'Seven Dwarves',
		rank: 2,
		skillCheck: {
			luck: 7,
			difficulty: 7,
			applicableSkills: ['c', 't', 's'],
			successText: 'The Dwarves scatter.',
			failureText: 'Take 1 Damage.'
		}
	},
	{
		title: 'Neon Imp',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 11,
			applicableSkills: ['t', 'm'],
			successText: 'The Demon is defeated. Draw a Tech or a Magic card.',
			failureText: 'The Demon draws energy. Discard 2 cards. This card is replaced with \'Neon Demon\' if it is not in play.'
		}
	},
	{
		title: 'Mr. Elusive',
		rank: 2,
		skillCheck: {
			luck: 3,
			difficulty: 5,
			applicableSkills: ['m', 't', 's'],
			successText: 'He\'s finally been captured.',
			failureText: 'Mr. Elusive flees to the furthest empty space.'
		},
		revealText: 'Mr. Elusive immediately moves to the furthest empty space. All players draw 1 fewer Stealth card during a Draw Cards Phase.'
	},
	{
		title: 'Witch',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 9,
			applicableSkills: ['m', 's'],
			successText: 'The Witch mutters something as you pass, but she\'s uninterested',
			failureText: 'You\'ve aggravated the Witch. She curses you. During a Draw Cards Phase, you no longer draw based on your Skills and instead draw a number of Magic cards equal to your combined Skill Points. Remove this card.'
		}
	},
	{
		title: 'Dense Fog',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 8,
			applicableSkills: ['m', 's'],
			successText: 'The fog clears.',
			failureText: 'You become disoriented. You may only leave this card in a random direction as determined by the spinner.'
		}
	},
	{
		title: 'Femme Fatale',
		rank: 2,
		skillCheck: {
			difficulty: 11,
			applicableSkills: ['s', 'm'],
			successText: 'You are not persuaded by her charm.',
			failureText: '-2 Credits.'
		}
	},
	{
		title: 'Dirty Cop',
		rank: 2,
		skillCheck: {
			difficulty: 10,
			applicableSkills: ['c', 's'],
			successText: 'The Cop buggers off to extort someone else.',
			failureText: 'Alert Counter -1. You may spend 1 Credit to count this as a success instead.'
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
			difficulty: 16,
			applicableSkills: ['m'],
			successText: 'The tree restores 2 Health to all players within 2 spaces.',
			failureText: 'The tree withers. Remove this card.',
			optional: true
		}
	},
	{
		title: 'Magic Rift',
		rank: 2,
		text: 'If your magic stat is less than 2, take 2 damage whenever you enter this card, regardless of whether or not it was revealed when you entered.'
	},
	{
		title: 'Anti-Magic Barrier',
		rank: 2,
		text: 'If your magic stat is greater than 1, take 3 Damage when you leave this card. Do not take Damage if you leave from the direction you entered.'
	},
	{
		title: 'Laser Matrix',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 9,
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
			successText: 'The Security Office is overtaken. Alert Counter +2.',
			failureText: 'An alarm sounds. Add one rank 2 card to the nearest empty space. Alert Counter -1.'
		}
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
		title: 'Combat Mage',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 10,
			applicableSkills: ['m', 'c'],
			successText: 'The Mage is defeated.',
			failureText: 'Take 1 Damage.'
		}
	},
	{
		title: 'Retinal Scanner',
		rank: 2,
		skillCheck: {
			difficulty: 9,
			applicableSkills: ['t'],
			successText: 'You\'ve spoofed an employees retinal signature.',
			failureText: 'Onlookers are growing suspicious. Add 2 Rank 1 Encounter cards to the nearest empty spaces.'
		}
	},
	{
		title: 'Fingerprint Scanner',
		rank: 2,
		skillCheck: {
			difficulty: 8,
			applicableSkills: ['t'],
			successText: 'You\'re in.',
			failureText: 'Alert Counter -1. If there are revealed Double Agents, they may look at your contract.'
		}
	},
	{
		title: 'Dog Pack',
		rank: 2,
		skillCheck: {
			luck: 2,
			difficulty: 8,
			applicableSkills: ['s', 'm', 'c'],
			successText: 'The dogs scatter in panic.',
			failureText: 'Take 2 Damage. Alert Counter -1.'
		}
	},
	{
		title: 'Sniper',
		rank: 2,
		skillCheck: {
			luck: 2,
			difficulty: 9,
			applicableSkills: ['t', 's'],
			successText: 'You evade the Sniper\'s shots.',
			failureText: 'Take 2 Damage.'
		}
	},
	{
		title: 'White Noise',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 8,
			applicableSkills: ['t'],
			successText: 'The noise ceases.',
			failureText: 'The noise persists. Alert Counter -1.'
		},
		optional: true,
		revealText: 'Any player within one space of this card must discard 1 card after a Draw Cards phase.'
	},
	{
		title: 'Cyborg',
		rank: 2,
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['t', 'c'],
			successText: 'The Cyborg collapses.',
			failureText: 'Take 1 Damage.'
		},
		text: 'Tech contributions count double on this card.'
	},
	{
		title: 'Botfly Swarm',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 8,
			applicableSkills: ['m', 's'],
			successText: 'The swarm dissipates.',
			failureText: 'The swarm will follow you. If you leave this card, -2 Health.'
		}
	},
	{
		title: 'Cybernetic Junkie',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 9,
			applicableSkills: ['t', 'c'],
			successText: 'If no Tech cards were contributed, the Junkie overloads and detonates. Take 1 Damage.',
			failureText: 'Take 1 Damage.'
		}
	},
	{
		title: 'Watchers',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 8,
			applicableSkills: ['m', 's'],
			successText: 'The floating eyeballs pass through.',
			failureText: 'The Watchers notice you and relay your location. Alert Counter -2.'
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
		title: 'Orc Thug',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['c', 's', 'm'],
			successText: 'The Orc passes out.',
			failureText: 'Take 1 Damage. The Orc grows angrier. +1 to this cards difficulty.'
		}
	},
	{
		title: 'Drunken Dwarf',
		rank: 1,
		skillCheck: {
			difficulty: 8,
			applicableSkills: ['c', 's'],
			successText: 'You sidestep the dwarf.',
			failureText: 'The Dwarf takes a swings at you. Roll: 3+, he misses and collapses. Remove this card. Otherwise, he connects. Take 1 Damage.'
		}
	},
	{
		title: 'Street Punks',
		rank: 1,
		skillCheck: {
			difficulty: 3,
			applicableSkills: ['m', 'c', 's'],
			successText: 'The punks take off.',
			failureText: '-1 Credits.'
		}
	},
	{
		title: 'Centaurs',
		rank: 1,
		text: 'Centaurs do not abide violence. Any time you are on this card, you must discard all Combat cards.'
	},
	{
		title: 'Security Camera',
		rank: 1,
		skillCheck: {
			difficulty: 3,
			applicableSkills: ['c', 't', 's'],
			successText: 'If more than 2 tech points were contributed. Reveal an adjacent card.',
			failureText: 'Alert Counter -1.'
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
		title: 'Guard',
		rank: 1,
		skillCheck: {
			luck: 1,
			difficulty: 3,
			applicableSkills: ['c', 's', 'm'],
			successText: 'The guard is incapacitated',
			failureText: 'Alert Counter -1.'
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
			failureText: 'The dog tears at your flesh and barks loudly. Take 1 Damage. -1 Alert Counter.'
		}
	},
	{
		title: 	'Mage Apprentice',
		rank: 1,
		skillCheck: {
			difficulty: 3,
			applicableSkills: ['m', 'c'],
			successText: 'The Apprentice is defeated.',
			failureText: 'Take 1 Damage.'
		}
	},
	{
		title: 'EMP Emitter',
		rank: 1,
		text: 'Immediately discard all tech cards, and do not draw any while you are on this card.'
	},
	{
		title: 'Laser Sights',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['t'],
			successText: 'The enemies sights are disabled.',
			failureText: 'You fail to disable the enemies sights.'
		},
		revealText: 'Any Skill Check on the board that accepts Combat cards gains +1 difficulty.'
	},
	{
		title: 'Motion Tracker',
		rank: 1,
		skillCheck: {
			difficulty: 6,
			applicableSkills: ['s', 't'],
			successText: 'The motion tracker is disabled.',
			failureText: 'You are detected by the motion tracker. Alert Counter -1.'
		},
		revealText: 'Any time an Agent moves onto this card, Alert Counter -1.'
	},
	{
		title: 'Alarm System',
		rank: 1,
		skillCheck: {
			difficulty: 6,
			applicableSkills: ['t', 's'],
			successText: 'The system is disarmed. Alert Counter +1',
			failureText: 'Alert Counter -1'
		}
	},
	{
		title: 'Secretary',
		rank: 1,
		skillCheck: {
			difficulty: 2,
			applicableSkills: ['s'],
			successText: 'The Secretary waves you by as he plays a game on his phone.',
			failureText: 'The Secretary asks you to wait a moment. Remove this card. Alert Counter -1.'
		}
	},
	{
		title: 'Servbot',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['t'],
			successText: 'The primitive robot malfunctions.',
			failureText: 'The Servbot demands payment for services. Pay 1 Credit or Alert Counter -1.'
		}
	},
	{
		title: 'Locked Door',
		rank: 1,
		skillCheck: {
			difficulty: 5,
			applicableSkills: ['t'],
			successText: 'The door is unlocked.',
			failureText: 'You may bust down the door. Remove this card. Alert Counter -1.'
		},
		text: 'You may only leave this card from the direction you entered.'
	},
	{
		title: 'Barbed Wire',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['t'],
			successText: 'The barbed wire is removed.',
			failureText: 'You\'re tangled in the barbed wire. Take 1 Damage or spend your next turn on this card untangling yourself. Remove this card after you do.'
		}
	},
	{
		title: 'Trip Wire',
		rank: 1,
		skillCheck: {
			difficulty: 3,
			applicableSkills: ['s', 't'],
			successText: 'You step over the wire. This card is not removed.',
			failureText: 'Alert Counter -1. This card is removed.'
		}
	},
	{
		title: 'Spark',
		rank: 1,
		skillCheck: {
			difficulty: 4,
			applicableSkills: ['t', 'm'],
			successText: 'The spirit fizzles out. Draw 1 Magic card.',
			failureText: 'The spirit shocks you. Take 1 Damage, Discard 1 Tech card.'
		}
	},
	{
		title: 'Innocent Bystander',
		rank: 1,
		skillCheck: {
			difficulty: 1,
			applicableSkills: ['c'],
			successText: 'Take the bystander hostage. Draw 2 Combat cards. Alert Counter -1.',
			failureText: 'If any Agent occupant has more than 5 cards, Alert Counter -1.'
		}
	}

];
