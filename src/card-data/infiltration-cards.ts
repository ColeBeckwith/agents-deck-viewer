// Keys are as follows:
//
// E: Encounter
// N: Null
// M: Empty
// L: Loot
// O: Entrance
// X: Exit

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
		]
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
