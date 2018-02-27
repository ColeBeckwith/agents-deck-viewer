// Keys are as follows:
//
// E: Encounter
// N: Null
// M: Empty
// L: Loot
// O: Entrance
// X: Exit
// S: Special

export default [
	{
		title: 'Alleyway',
		baseAlertCounter: 10,
		board: [
			['0N', '0N', '0N', '0X', '0N', '0N'],
			['0N', '0N', '0N', '1E', '0N', '0N'],
			['0N', '0N', '0N', '1E', '2E', '2L'],
			['0N', '0N', '0N', '1E', '0N', '0N'],
			['1L', '1E', '1E', '1E', '0N', '0N'],
			['0N', '0N', '0N', '0O', '0N', '0N']
		],
		rewardText: '1000 Credits.'
	},
	{
		title: 'Backed into a Corner',
		baseAlertCounter: 10,
		board: [
			['2L', '2E', '1E', '0O', '1E', '2E', '2L'],
			['2E', '1E', '1E', '1E', '1E', '1E', '2E'],
			['1L', '2E', '1E', '2E', '1E', '2E', '1L']
		],
		rewardText: '1000 Credits.',
		exit: 'Leave the Infiltration from any card on the bottom row.'
	},
	{
		title: 'Heist',
		baseAlertCounter: 20,
		board: [
			['0N', '0N', '2L', '3L', '2L', '0N', '0N'],
			['0N', '0N', '2L', '4E', '2L', '0N', '0N'],
			['0N', '0N', '1E', '1L', '1E', '0N', '0N'],
			['0N', '0N', '0N', '4E', '0N', '0N', '0N'],
			['0X', '2E', '0M', '3E', '0M', '3E', '0X'],
			['2E', '0M', '0M', '1E', '0M', '0M', '1E'],
			['0M', '1E', '0O', '0O', '0O', '0M', '0M']
		],
		exit: 'Roll a die when the Alert Counter reaches 3. If the result is even the getaway car arrives on the West side of the map. If the result is odd the getaway car arrives on the East side of the map. You may only exit from that side.',
		rewardText: 'If all Loot is cleared from the board, 2000 Credits.'
	},
	{
		title: 'Ambush',
		exit: 'Use your move action to exit from any perimeter space.',
		baseAlertCounter: 12,
		board: [
			['0N', '0N', '0N', '0N', '2E', '2E', '0N', '2E', '3L'],
			['0N', '0N', '1E', '3E', '1E', '1E', '1E', '3E', '2E'],
			['0N', '2E', '0M', '0M', '0N', '3E', '2E', '0M', '0N'],
			['0N', '3E', '2E', '0M', '2E', '0M', '4E', '3E', '0N'],
			['4E', '1E', '2E', '1E', '0O', '4E', '3E', '0N', '0N'],
			['0N', '3E', '0M', '0M', '1E', '3E', '0N', '0N', '0N'],
			['0N', '0N', '3E', '3E', '2L', '3E', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N', '4E', '0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N', '1E', '0N', '0N', '0N', '0N'],
		]
	},
	{
		title: 'Get to the Chopper',
		exit: 'When the Alert Counter is less than or equal to 0. You may exit the Infiltration from anywhere on the top floor.',
		baseAlertCounter: 20,
		board: [
			// Rooftop
			['0N', '0N', '0N', '0O'],
			['0N', '0N', '1E', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			// Buffer
			['0N', '0N', '0N', '0N'],
			// Second Floor
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			// Buffer
			['0N', '0N', '0N', '0N'],
			// First Floor
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			// Buffer
			['0N', '0N', '0N', '0N'],
			// Basement
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N'],
			['0N', '0N', '0N', '0N']
		]

	}
]
