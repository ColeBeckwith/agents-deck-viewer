export default [
	{
		title: 'Laser Matrix',
		rank: 2,
		skillCheck: {
			luck: 1,
			difficulty: 7,
			applicableSkills: ['s', 't']
		},
		successText: 'If you pass with 4 or more <i>Tech</i> points, the lasers are disarmed. Remove the card. Otherwise, the card remains on the board.',
		failureText: 'Alert Counter -1'
	},
	{
		title: 'Laser Matrix',
		rank: 1,
		skillCheck: {
			difficulty: 7,
			applicableSkills: ['s', 't']
		},
		successText: 'If you pass with 4 or more <i>Tech</i> points, the lasers are disarmed. Remove the card. Otherwise, the card remains on the board.',
		failureText: 'Alert Counter -1'
	},
	{
		title: 'Laser Matrix',
		rank: 3,
		skillCheck: {
			luck: 1,
			difficulty: 7,
			applicableSkills: ['s', 't', 'm', 'c']
		},
		successText: 'If you pass with 4 or more <i>Tech</i> points, the lasers are disarmed. Remove the card. Otherwise, the card remains on the board.',
		failureText: 'Alert Counter -1'
	},
	{
		title: 'Laser Matrix',
		rank: 4,
		skillCheck: {
			luck: 1,
			difficulty: 7,
			applicableSkills: ['c', 'm']
		},
		successText: 'If you pass with 4 or more <i>Tech</i> points, the lasers are disarmed. Remove the card. Otherwise, the card remains on the board.',
		failureText: 'Alert Counter -1'
	}
];
