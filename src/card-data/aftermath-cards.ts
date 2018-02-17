export default [
	{
		title: 'Synergy',
		text: 'Each Agent may now speak only one word until this card is resolved (Excluding the reader when they are reading this card). Each Agent must contribute an ability card face down to a pool in any order. When every player has contributed a card, shuffle the cards and reveal them. If more than two types are represented in the pool, -2 Health to each Agent. Tap this card to have the reader read it again.',
		minPlayers: 3
	},
	{
		title: 'Tainted Water',
		text: 'Each player may contribute as many cards as they want face down to a pool. You may not say anything about the cards you are putting into the pool, but you may say how many you are putting in. After all players are done contributing. Shuffle the cards and reveal. If there are no tech or combat cards in the pool +1 Health for every two cards in the pool. If there is a tech or combat card in the pool -1 Health for every two cards in the pool.',
		minPlayers: 3
	},
	{
		title: 'Cull the Herd',
		text: 'Starting with the player with the least Favor and moving clockwise, any Agent may choose to inflict 3 Damage onto the player to their left and gain 1 Stat point. Once a player has taken this option. The card is resolved. All players may choose to forgo this opportunity.',
		minPlayers: 2
	},
	{
		title: 'The Shadow Brokers',
		text: 'The Shadow Broker deals in information. Any player may spend 10,000 credits to look at another player\'s contract. Each player may do this only once.',
		minPlayers: 2
	},
	{
		title: 'Greedy Soul',
		text: 'Each player selects an Ability card from their hand and places in face down in front of them. Once every player has selected a card, reveal them simultaneously. If the combined value of all selected cards is equal to or greater than 3 x the number of players, everyone loses half their credits. If it is less than 3x the number of players, the player or players who played the highest card split all the credits of the other players.',
		minPlayers: 2
	},
	{
		title: 'Odd Man Out',
		text: 'Everyone contributes one card to a pool. You may declare whether they card you are contributing is even or odd, but no other information about it. If the combined value of all cards is even, +2 Health to each player. If it is odd, -1 Health to each player.'
	},
	{
		title: 'The Tracker',
		skillCheck: {
			luck: 2,
			difficulty: 32,
			applicableSkills: ['m', 't', 'c', 's'],
			successText: 'The party has shaken the tail',
			failureText: 'DAs get one full turn at the start of each Infiltration. You may attempt this Skill Check once per Aftermath phase.'
		}
	},
	{
		title: 'Safe House Compromised',
		skillCheck: {
			difficulty: 20,
			applicableSkills: ['m', 't', 's'],
			successText: 'You salvage what you can and retreat to another Safe House.',
			failureText: 'You spend the week on the run. Skip the next Black Market phase.'
		}
	},
	{
		title: 'Investigative Reporter',
		skillCheck: {
			difficulty: 10,
			applicableSkills: ['s'],
			successText: 'The reporter is unable to substantiate her hunch. This Skill Check must be performed each Aftermath phase until it is failed.',
			failureText: 'The reporter publishes her piece. The player with the lowest Stealth Skill reveals their contract. This does not force a Double Agent to reveal.'
		}
	},
	{
		title: 'Rival Guild',
		skillCheck: {
			difficulty: 30,
			applicableSkills: ['s', 'm', 't', 'c'],
			failureText: 'The Rival Guild proves themselves more efficient and effective than your own. No Agent may gain Credits until the next Aftermath card is drawn.'
		}
	},
	{
		title: 'Crisis: Slade',
		text: 'The Corporation has developed a task force in cooperation with the local law enforcement. Slade has been tapped to head the team. If Slade is controlled by a player they may accept this role or reject it. If Slade accepts, she must spend additional time at work. She cannot enter the Infiltration until the 3rd round. She is able to feed the Corporation misinformation. Each Infiltration starts with Alert Counter +1. If she rejects, the Corporation brings on her counterpart in another department. Alert Counter -1 at the start of each Infiltration. With the bureau focused on it\'s new partnership, Slade is able to operate with reduced oversight. She gets +1 Stealth. If Slade is not controlled by a player, she accepts the position. With a unanimous Agent vote, the Guild may choose to place an assassination order on Slade. The next Infiltration will start with Alert Counter -3. If you do not, she becomes controlled by the Double Agents once one is revealed.'
	}
]
