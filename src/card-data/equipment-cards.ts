export default [
	{
		type: 'Chest',
		title: 'Tinker\'s Mech',
		text: 'This card can only be equipped to Tinker. If Tinker has more than 5 health, she may declare Tech cards as Combat cards.'
	},
	{
		type: 'Chest',
		title: 'Cloaking Rig',
		text: 'If a Skill Check accepts only Stealth, you may choose not to activate it.',
		requirements: {
			t: 2
		},
		cost: 600
	},
	{
		type: 'Chest',
		title: 'Active Camo',
		text: 'You may contribute Tech cards as Stealth cards.',
		requirements: {
			t: 4
		},
		cost: 2400
	},
	{
		type: 'Chest',
		title: 'Kinetic Transfer Vest',
		text: 'Any time you would take exactly 1 Damage, +1 Health.',
		requirements: {
			t: 3,
			c: 2
		},
		cost: 2000
	},
	{
		type: 'Chest',
		title: 'Generator',
		text: 'Deployable: Draw 4 Tech cards if you start you turn on this card.',
		requirements: {
			t: 3
		},
		cost: 2000
	},
	{
		type: 'Chest',
		title: 'Symbiosis',
		text: 'Select another player when you equip this item. Any time that player gains or loses health, you experience the same effect.',
		requirements: {
			m: 2
		},
		cost: 2000
	},
	{
		type: 'Arm',
		title: 'Caduceus',
		requirements: {
			m: 2
		},
		text: 'You may not carry any Combat cards. Once per turn, discard a Magic card, +1 Health to any player.'
	},
	{
		type: 'Arm',
		title: 'Cheater\'s Sleeve',
		text: 'If this card is equipped to a Double Agent when they reveal, they immediately gain two Skill points.',
		cost: 300
	},
	{
		type: 'Arm',
		title: 'Desert Eagle',
		text: '+1 Value to all \'Fire Pistol\' card played.',
		requirements: {
			c: 3
		},
		cost: 1000
	},
	{
		type: 'Arm',
		title: 'Blade of the Guild',
		text: 'When in Combat with another player, add your Favor to your roll.',
		cost: 1200
	},
	{
		type: 'Arm',
		title: 'Poison Blade',
		text: 'Any time you Attack of Defend against another player, they gain 1 point of Poison.',
		requirements: {
			stealth: 4
		},
		cost: 4000
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
		type: 'Arm',
		title: 'Stun Rod',
		text: 'Any time you attack another player, that player loses their next turn.',
		requirements: {
			t: 1,
			c: 1
		},
		cost: 800
	},
	{
		type: 'Arm',
		title: 'Blood Summon',
		text: 'Deployable: Take 2 damage. Move this card one space per turn. It can contribute 5 combat or magic points to any Skill Check at it\'s location, but cannot reveal or initiate a Skill Check.',
		requirements: {
			m: 4
		},
		cost: 2500
	},
	{
		type: 'Arm',
		title: 'Iron Grip',
		text: 'You cannot be forced to discard Combat cards by another card.',
		requirements: {
			c: 2
		},
		cost: 2000
	},
	{
		type: 'Arm',
		title: 'Trojan Horse',
		text: 'Whenever you fail a Skill Check, reveal 5 cards.',
		requirements: {
			t: 3
		},
		cost: 2000
	},
	{
		type: 'Head',
		title: 'Prayer Necklace',
		text: 'Whenever you fail a Skill Check you may roll a dice. On a roll of 6, treat it as if you had passed. On a roll of 1 immediately drop to 0 Health. The roll result cannot be modified.',
		requirements: {
			m: 1
		},
		cost: 2000
	},
	{
		type: 'Head',
		title: 'Bluetooth Implant',
		text: 'Whenever a card containing a Skill Check that accepts Tech cards is revealed, draw 1 Tech card.',
		requirements: {
			t: 3
		},
		cost: 1400
	},
	{
		type: 'Head',
		title: 'Attrition',
		text: 'When another Agent dies, gain 1 Skill point for every 2 they had.',
		requirements: {
			m: 3
		},
		cost: 2000
	},
	{
		type: 'Head',
		title: 'Mohawk',
		text: '-1 Alert Counter at the start of each Infiltration. You don\'t have a Mohawk because it makes life easier, you do it because it\'s badass.',
		cost: 50
	},
	{
		type: 'Head',
		title: 'Bite of Uruk',
		text: 'When you engage in combat with another player, you Heal equal to the Damage you deal.',
		requirements: {
			m: 1
		},
		cost: 700
	},
	{
		type: 'Head',
		title: 'Comm Uplink',
		text: '+1 Alert Counter when you Pass. "All clear down here boys"',
		requirements: {
			t: 1
		},
		cost: 400
	},
	{
		type: 'Head',
		title: 'Spyglass',
		text: 'Discard 50 points of Stealth cards to look at another player\'s contract.',
		requirements: {
			s: 4
		},
		cost: 2300
	},
	{
		type: 'Head',
		title: 'Sunglasses',
		text: 'Keep a low profile. +1 Alert Counter at the start of each Infiltration.',
		requirements: {},
		cost: 200
	},
	{
		type: 'Head',
		title: 'Combat HUD',
		text: 'When you draw Combat cards, draw 2 extra and discard 2.',
		requirements: {
			c: 3
		},
		cost: 2000
	},
	{
		type: 'Head',
		title: 'Ocular Implants',
		text: 'Whenever you share a space with another player you may look at their hand.',
		requirements: {
			t: 2
		},
		cost: 750
	},
	{
		type: 'Head',
		title: 'Phantom Cigar',
		text: 'Discard this card while it is equipped to immediately pass a Skill Check that allows Stealth cards.',
		requirements: {
			s: 2
		},
		cost: 750
	},
	{
		type: 'Head',
		title: 'Dia De Los Muertos',
		text: 'If you reach 0 Health or lower while this mask is equipped. Discard this card and set your Health to 4.',
		requirements: {
			m: 4
		},
		cost: 1350
	},
	{
		type: 'Head',
		title: 'Recon Drone',
		text: 'Deployable: Move this drone one space each turn. It reveals the encounter card it is on.',
		requirements: {
			t: 2
		},
		cost: 1500
	},
	{
		type: 'Legs',
		title: 'Sprinting Augments',
		requirements: {
			t: 3
		},
		text: 'Each turn, you may move an extra space. If your Stealth is less than 3, Alert Counter -1.',
		cost: 1200
	},
	{
		type: 'Legs',
		title: 'Crimson and Clover',
		requirements: {
			m: 1
		},
		text: '+1 to any dice result you roll.',
		cost: 3000
	},
	{
		type: 'Legs',
		title: 'Rabbit\'s Foot',
		requirements: {
			m: 2
		},
		text: 'Luck die are rolled before cards are contributed when you are involved in a Skill Check.'
	},
	{
		type: 'Legs',
		title: 'Prosthetic Leg',
		requirements: {
			t: 1
		},
		text: '+6 Health when equipped. This item cannot be unequipped.',
		cost: 1000
	},
	{
		type: 'Legs',
		title: 'Hostile Telekinetic Linking',
		requirements: {
			m: 2
		},
		text: 'Any space a DA touches is revealed.',
		cost: 1400
	},
	{
		type: 'Legs',
		title: 'Arsenal Rig',
		requirements: {
			c: 1,
			t: 1
		},
		text: 'Equip an extra item to each of your other slots. Does not include your Legs slot.',
		cost: 3000
	},
	{
		type: 'Legs',
		title: 'Telekinetic Linking',
		requirements: {
			m: 1
		},
		text: 'Once per round, when an ally moves, you may move in the same direction. This does not count as your move.',
		cost: 800
	},
	{
		type: 'Legs',
		title: 'Jet Boots',
		requirements: {
			t: 2
		},
		text: 'Move from an edge piece on any floor to an edge piece on a floor directly below when moving.',
		cost: 2000
	},
	{
		type: 'Legs',
		title: 'Ascension',
		requirements: {
			m: 3
		},
		text: 'Move from an edge piece of any floor to an edge piece of a floor directly above when moving.',
		cost: 2200
	},
	{
		type: 'Legs',
		title: 'Teleporter',
		requirements: {
			t: 1,
			m: 1
		},
		text: 'Deployable: At the beginning of any turn, you may instantly move to this location by discarding one Tech or Magic card.',
		cost: 2000
	},
	{
		type: 'Legs',
		title: 'Decoy',
		requirements: {
			s: 2
		},
		text: 'Deployable: Do not activate any Skill Checks at this location. This item can only be retrieved at the beginning of a round.'
	},
	{
		type: 'Consumable',
		title: 'Leech Berries',
		text: 'Consume during an Infiltration. -6 Health. At the start of your next 5 turns, +2 Health.',
		requirements: {
			m: 1
		},
		cost: 500
	},
	{
		type: 'Consumable',
		title: 'Sky Hook',
		text: 'Immediately leave the Infiltration if an exit is available',
		requirements: {
			t: 3
		},
		cost: 2000
	},
	{
		type: 'Consumable',
		title: 'Apple',
		text: 'Keep the doctor away. +1 Health.',
		cost: 100
	},
	{
		type: 'Consumable',
		title: 'Side Ops',
		text: '+1 Favor.',
		cost: 500
	},
	{
		type: 'Consumable',
		title: 'Gavel',
		text: 'During a Loyalty vote, your vote counts as two votes.',
		cost: 500
	},
	{
		type: 'Consumable',
		title: 'Guillotine',
		text: '-1 Favor to any Agent.',
		cost: 1500
	},
	{
		type: 'Consumable',
		title: 'Cookie Jar',
		text: '-1 Favor. +2 Health.',
		cost: 600
	},
	{
		type: 'Consumable',
		title: 'Hijax',
		text: '-1 Health. Take a second move action.',
		cost: 400
	},
	{
		type: 'Consumable',
		title: 'Antidote',
		text: 'Get rid of 1 point of Poison.',
		cost: 300
	},
	{
		type: 'Consumable',
		title: 'Cure',
		text: 'Get rid of all points of Poison.',
		cost: 600
	},
	{
		type: 'Consumable',
		title: 'Burner Phone',
		text: 'Discard the current Aftermath card and draw a new one.',
		cost: 500
	},
	{
		type: 'Training',
		title: 'Simulation Training',
		text: '+1 to Combat, Tech or Stealth. Max 3.',
		cost: 800
	},
	{
		type: 'Training',
		title: 'Spirit Quest',
		text: '+2 to Magic.',
		cost: 2500
	}
]
