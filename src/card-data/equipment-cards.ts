export default [

	// CHEST

	{
		type: 'Chest',
		title: 'Tinker\'s Mech',
		text: 'This card can only be equipped to Tinker. If Tinker has more than 5 health, she may declare Tech cards as Combat cards.',
		cost: 0
	},
	{
		type: 'Chest',
		title: 'Cloaking Rig',
		text: 'If a Skill Check accepts only Stealth, you may choose not to activate it.',
		requirements: {
			t: 2
		},
		cost: 6
	},
	{
		type: 'Chest',
		title: 'Meat Shield',
		text: 'Next time you would take Damage, discard this card instead.',
		cost: 2
	},
	{
		type: 'Chest',
		title: 'Active Camo',
		text: 'You may contribute Tech cards as Stealth cards.',
		requirements: {
			t: 4
		},
		cost: 24
	},
	{
		type: 'Chest',
		title: 'Invisibility',
		text: 'Draw an extra Stealth card during the Draw Cards phase.',
		requirements: {
			m: 4
		},
		cost: 30
	},
	{
		type: 'Chest',
		title: 'Kinetic Transfer Vest',
		text: 'Any time you would take exactly 1 Damage, +1 Health.',
		requirements: {
			t: 3,
			c: 2
		},
		cost: 20
	},
	{
		type: 'Chest',
		title: 'Generator',
		text: 'Deployable: Draw 4 Tech cards if you start you turn on this card.',
		requirements: {
			t: 3
		},
		cost: 20
	},
	{
		type: 'Chest',
		title: 'Symbiosis',
		text: 'Select another player when you equip this item. Any time that player gains or loses health, you experience the same effect.',
		requirements: {
			m: 2
		},
		cost: 20
	},
	{
		type: 'Chest',
		title: 'Bulwark',
		text: 'You may only contribute two cards to a Skill Check. Negate up to 3 damage from any Skill Check you participate in.',
		requirements: {
			c: 3
		},
		cost: 40
	},
	{
		type: 'Chest',
		title: 'Dimension Shift',
		text: 'Whenever the results of a Skill Check would affect other cards on the board, you may choose to negate them.',
		requirements: {
			m: 4
		},
		cost: 30
	},
	{
		type: 'Chest',
		title: 'Trenchcoat',
		text: 'No other player may take Ability Cards from your hand.',
		requirements: {
			s: 1
		},
		cost: 2
	},

	// ARM

	{
		type: 'Arm',
		title: 'Enchant Weapons',
		requirements: {
			m: 4
		},
		text: 'Whenever another player participates in a Skill Check with you where Combat is applicable. Double the value of their Combat cards.',
		cost: 30
	},
	{
		type: 'Arm',
		title: 'Lightning Staff',
		requirements: {
			m: 2
		},
		text: 'If a Skill Check you are on accepts only Tech cards, reduce it\'s difficulty by 10.',
		cost: 10
	},
	{
		type: 'Arm',
		title: 'Caduceus',
		requirements: {
			m: 2
		},
		text: 'You may not carry any Combat cards. Once per turn, discard a Magic card, +1 Health to any player.',
		cost: 10
	},
	{
		type: 'Arm',
		title: 'Desert Eagle',
		text: '+1 Value to all \'Fire Pistol\' card played.',
		requirements: {
			c: 3
		},
		cost: 10
	},
	{
		type: 'Arm',
		title: 'Blade of the Guild',
		text: 'When in Combat with another player, add your Favor to your roll.',
		cost: 12
	},
	{
		type: 'Arm',
		title: 'Poison Blade',
		text: 'Any time you engage in combat with another player, they gain 1 point of Poison.',
		requirements: {
			stealth: 4
		},
		cost: 15
	},
	{
		type: 'Arm',
		title: 'Binoculars',
		text: 'Once per round, you may reveal 1 card that is more than 1 space away.',
		requirements: {
			t: 1
		},
		cost: 2
	},
	{
		type: 'Arm',
		title: 'Overloaded Gauntlets',
		text: 'Once per turn roll a d6. On a roll of 1 or 2, take 1 Damage, otherwise draw 2 Combat cards and 2 Tech cards.',
		requirements: {
			t: 3,
			c: 1
		},
		cost: 10
	},
	{
		type: 'Arm',
		title: 'Stun Rod',
		text: 'Any time you attack another player, that player loses their next turn.',
		requirements: {
			t: 1,
			c: 1
		},
		cost: 8
	},
	{
		type: 'Arm',
		title: 'Blood Summon',
		text: 'Deployable: Take 2 damage. Move this card one space per turn. It can contribute 5 combat or magic points to any Skill Check at it\'s location, but cannot reveal or initiate a Skill Check.',
		requirements: {
			m: 4
		},
		cost: 25
	},
	{
		type: 'Arm',
		title: 'Iron Grip',
		text: 'You cannot be forced to discard Combat cards by another card.',
		requirements: {
			c: 2
		},
		cost: 20
	},
	{
		type: 'Arm',
		title: 'Trojan Horse',
		text: 'Whenever you fail a Skill Check, reveal 5 cards.',
		requirements: {
			t: 3
		},
		cost: 20
	},
	{
		type: 'Arm',
		title: 'Credit Scanner',
		text: 'Each time you pass a Skill Check, +100 Credits.',
		requirements: {
			s: 1,
			t: 1
		},
		cost: 20
	},
	{
		type: 'Arm',
		title: 'Silencer',
		text: 'You may declare Combat cards as Stealth cards of their value -1 when you contribute to a Skill Check.',
		requirement: {
			c: 3,
			t: 1
		},
		cost: 25
	},

	// HEAD

	{
		type: 'Head',
		title: 'Hot Head',
		text: 'Once per turn, reduce your Health by 1. Draw Ability cards again.',
		cost: 10
	},
	{
		type: 'Head',
		title: 'Prayer Necklace',
		text: 'Whenever you fail a Skill Check you may roll a dice. On a roll of 6, treat it as if you had passed. On a roll of 1 immediately drop to 0 Health. The roll result cannot be modified.',
		requirements: {
			m: 1
		},
		cost: 20
	},
	{
		type: 'Head',
		title: 'Bluetooth Implant',
		text: 'Whenever a card containing a Skill Check that accepts Tech cards is revealed, draw 1 Tech card.',
		requirements: {
			t: 3
		},
		cost: 14
	},
	{
		type: 'Head',
		title: 'Attrition',
		text: 'When another Agent dies, gain 1 Skill point for every 2 they had.',
		requirements: {
			m: 3
		},
		cost: 20
	},
	{
		type: 'Head',
		title: 'Mohawk',
		text: '-1 Alert Counter at the start of each Infiltration. You don\'t have a Mohawk because it makes life easier, you do it because it\'s badass.',
		cost: 0
	},
	{
		type: 'Head',
		title: 'Bite of Uruk',
		text: 'When you engage in combat with another player, you Heal equal to the Damage you deal.',
		requirements: {
			m: 1
		},
		cost: 7
	},
	{
		type: 'Head',
		title: 'Comm Uplink',
		text: '+1 Alert Counter when you Pass. "All clear down here boys"',
		requirements: {
			t: 1
		},
		cost: 4
	},
	{
		type: 'Head',
		title: 'Spyglass',
		text: 'Discard 50 points of Stealth cards to look at another player\'s contract.',
		requirements: {
			s: 4
		},
		cost: 23
	},
	{
		type: 'Head',
		title: 'Sunglasses',
		text: 'Keep a low profile. +1 Alert Counter at the start of each Infiltration.',
		requirements: {},
		cost: 4
	},
	{
		type: 'Head',
		title: 'Combat HUD',
		text: 'When you draw Combat cards, draw 2 extra and discard 2.',
		requirements: {
			c: 3
		},
		cost: 20
	},
	{
		type: 'Head',
		title: 'Ocular Implants',
		text: 'Whenever you share a space with another player you may look at their hand.',
		requirements: {
			t: 2
		},
		cost: 8
	},
	{
		type: 'Head',
		title: 'Dia De Los Muertos',
		text: 'If you reach 0 Health or lower while this mask is equipped. Discard this card and set your Health to 4.',
		requirements: {
			m: 4
		},
		cost: 13
	},
	{
		type: 'Head',
		title: 'Recon Drone',
		text: 'Deployable: Move this drone one space each turn. It reveals the encounter card it is on.',
		requirements: {
			t: 2
		},
		cost: 15
	},

	// LEGS

	{
		type: 'Legs',
		title: 'Strong Legs',
		text: 'You may carry a downed ally an extra space each turn.',
		requirements: {
			c: 1
		},
		cost: 20
	},
	{
		type: 'Legs',
		title: 'Deep Roots',
		requirements: {
			m: 4
		},
		text: 'The user is one with the Earth and can terraform it to their advantage. Each Infiltration, the user can place 2 Empty cards adjacent to any existing card.',
		cost: 30
	},
	{
		type: 'Legs',
		title: 'Sprinting Augments',
		requirements: {
			t: 3
		},
		text: 'Each turn, you may move an extra space. If your Stealth is less than 3, Alert Counter -1.',
		cost: 16
	},
	{
		type: 'Legs',
		title: 'Crimson and Clover',
		requirements: {
			m: 1
		},
		text: '+1 to any dice result you roll.',
		cost: 30
	},
	{
		type: 'Legs',
		title: 'Rabbit\'s Foot',
		requirements: {
			m: 2
		},
		text: 'Luck die are rolled before cards are contributed when you are involved in a Skill Check.',
		cost: 8
	},
	{
		type: 'Legs',
		title: 'Prosthetic Leg',
		requirements: {
			t: 1
		},
		text: '+6 Health when equipped. This item cannot be unequipped.',
		cost: 10
	},
	{
		type: 'Legs',
		title: 'Hostile Telekinetic Linking',
		requirements: {
			m: 2
		},
		text: 'Any space a DA touches is revealed.',
		cost: 14
	},
	{
		type: 'Legs',
		title: 'Arsenal Rig',
		requirements: {
			c: 1,
			t: 1
		},
		text: 'Equip an extra item to each of your other slots. Does not include your Legs slot.',
		cost: 30
	},
	{
		type: 'Legs',
		title: 'Telekinetic Linking',
		requirements: {
			m: 1
		},
		text: 'Once per round, when an ally moves, you may move in the same direction. This does not count as your move.',
		cost: 8
	},
	{
		type: 'Legs',
		title: 'Jet Boots',
		requirements: {
			t: 2
		},
		text: 'Move from an edge piece on any floor to an edge piece on a floor directly below when moving.',
		cost: 20
	},
	{
		type: 'Legs',
		title: 'Ascension',
		requirements: {
			m: 3
		},
		text: 'Move from an edge piece of any floor to an edge piece of a floor directly above when moving.',
		cost: 22
	},
	{
		type: 'Legs',
		title: 'Teleporter',
		requirements: {
			t: 1,
			m: 1
		},
		text: 'Deployable: At the beginning of any turn, you may instantly move to this location by discarding one Tech or Magic card.',
		cost: 20
	},
	{
		type: 'Legs',
		title: 'Decoy',
		requirements: {
			s: 2
		},
		text: 'Deployable: Do not activate any Skill Checks at this location. This item can only be retrieved at the beginning of a round.',
		cost: 20
	},

	// CONSUMABLE

	{
		type: 'Consumable',
		title: 'Leech Berries',
		text: 'Consume during an Infiltration. -6 Health. At the start of your next 5 turns, +2 Health.',
		requirements: {
			m: 1
		},
		cost: 5
	},
	{
		type: 'Consumable',
		title: 'Sky Hook',
		text: 'Immediately leave the Infiltration if an exit is available',
		requirements: {
			t: 3
		},
		cost: 20
	},
	{
		type: 'Consumable',
		title: 'Bandages',
		text: '+2 Health.',
		cost: 3
	},
	{
		type: 'Consumable',
		title: 'Apple',
		text: 'Keep the doctor away. +1 Health.',
		cost: 1
	},
	{
		type: 'Consumable',
		title: 'Side Ops',
		text: '+1 Favor.',
		cost: 5
	},
	{
		type: 'Consumable',
		title: 'Gavel',
		text: 'During a Loyalty vote, your vote counts as two votes.',
		cost: 3
	},
	{
		type: 'Consumable',
		title: 'Guillotine',
		text: '-1 Favor to any Agent.',
		cost: 15
	},
	{
		type: 'Consumable',
		title: 'Cookie Jar',
		text: '-1 Favor. +2 Health.',
		cost: 6
	},
	{
		type: 'Consumable',
		title: 'Hijax',
		text: '-1 Health. Take a second move action.',
		cost: 4
	},
	{
		type: 'Consumable',
		title: 'Antidote',
		text: 'Get rid of 1 point of Poison.',
		cost: 3
	},
	{
		type: 'Consumable',
		title: 'Cure',
		text: 'Get rid of all points of Poison.',
		cost: 6
	},
	{
		type: 'Consumable',
		title: 'Burner Phone',
		text: 'Discard the current Aftermath card and draw a new one.',
		cost: 5
	},
	{
		type: 'Consumable',
		title: 'C4',
		text: 'Remove an adjacent card. All Encounter cards (including the one you are on) gain 1 Rank.',
		requirements: {
			c: 1,
			t: 1
		},
		cost: 8
	},
	{
		type: 'Consumable',
		title: 'Lock and Load',
		text: 'Draw 5 Combat Ability cards.',
		cost: 3
	},
	{
		type: 'Consumable',
		title: 'Tranquilizer Rounds',
		text: 'Stop an initiated Skill Check from occurring.',
		requirements: {
			t: 2,
			c: 2
		},
		cost: 2
	},
	{
		type: 'Consumable',
		title: 'Cheater\'s Sleeve',
		text: 'Gain two Skill Points when you reveal as a Double Agent.',
		cost: 7
	},
	{
		type: 'Consumable',
		title: 'Phantom Cigar',
		text: 'Immediately pass a Skill Check that allows Stealth cards.',
		requirements: {
			s: 4
		},
		cost: 30
	},
	{
		type: 'Consumable',
		title: 'Mine',
		text: 'When another player activates a Loot Card. You may use the card\'s effect instead.',
		requirements: {
			s: 2
		},
		cost: 25
	},

	// TRAINING

	{
		type: 'Training',
		title: 'Simulation Training',
		text: '+1 Combat, Tech or Stealth Level.',
		cost: 20
	},
	{
		type: 'Training',
		title: 'Spirit Quest',
		text: '+2 Magic Levels.',
		cost: 25
	},
	{
		type: 'Training',
		title: 'Mark of the Magi',
		text: '-1 Health. +1 Magic Level.',
		cost: 4
	},
	{
		type: 'Training',
		title: 'Focus Magic',
		text: 'Discard 5 Magic Ability Cards. +1 Magic Level.',
		cost: 6
	},
	{
		type: 'Training',
		title: 'Firing Range',
		text: '+1 Combat Level.',
		cost: 10
	},
	{
		type: 'Training',
		title: 'Heist',
		text: '+1 Stealth Level. +5 Credits.',
		cost: 15
	},
	{
		type: 'Training',
		title: 'Upgrade Software',
		text: 'Spend 5 Credits. +1 Tech Level.',
		cost: 5
	},
	{
		type: 'Training',
		title: 'Upgrade Hardware',
		text: 'Discard 2 Equipment Cards. +2 Tech Levels.',
		cost: 7
	},
	{
		type: 'Training',
		title: 'Knowledge Share',
		text: 'Give any other Agent +1 Level up to your current Level.',
		cost: 6
	},
	{
		type: 'Training',
		title: 'Knowledge Extraction',
		text: 'Take 1 Level from any Agent and add it to your own up to the Level that you took in the same Stat.',
		cost: 20
	},
	{
		type: 'Training',
		title: 'Spar',
		text: 'Pick another Agent, you each gain 1 Level in the same Stat.',
		cost: 24
	},
	{
		type: 'Training',
		title: 'Workshop',
		text: '+1 Tech Level. Draw the first Equippable card from the Equipment deck.',
		cost: 30
	},
	{
		type: 'Training',
		title: 'Blood, Sweat and Tears',
		text: 'Max out one Stat. Take 3 Damage for each Level gained.',
		cost: 30
	}

]
