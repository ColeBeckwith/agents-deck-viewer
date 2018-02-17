import { Card } from './Card';

const codeMappings = {
	E: 'Encounter',
	N: 'None',
	M: 'Empty',
	L: 'Loot',
	O: 'Entrance',
	X: 'Exit'
};

export class InfiltrationCard extends Card {
	board: Array<Array<BoardSpace>>;
	baseAlertCounter: number;

	constructor(data) {
		super(data);

		this.title = data.title;
		this.baseAlertCounter = data.baseAlertCounter;
		this.board = this.generateBoard(data.board);
	}

	public forEachSpace(fn: Function) {
		this.board.forEach((row) => {
			row.forEach((square) => {
				fn(square);
			});
		});
	}

	private generateBoard(layout: Array<Array<string>>): Array<Array<BoardSpace>> {
		let layoutTemp = [];
		layout.forEach((row) => {
			let rowTemp = [];
			layoutTemp.push(rowTemp);
			row.forEach((space) => {
				rowTemp.push(new BoardSpace(space));
			});
		});
		return layoutTemp;
	}
}

export class BoardSpace {
	type: string;
	rank: number;
	card: Card;
	occupants: Array<string>;

	constructor(space: string) {
		if (space.length !== 2) {
			throw new Error('BoardSpace is of an invalid format: ' + space);
		}

		this.occupants = [];

		const number = space[0];
		const code = space[1];

		this.type = codeMappings[code];
		this.rank = parseInt(number);
	}
}
