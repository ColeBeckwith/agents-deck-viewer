export class Card {
	title: string;
	text: string;
	undrawable: boolean;
	marked: boolean;
	hidden: boolean;

	constructor(data) {
		if (data.undrawable === true) {
			this.undrawable = true;
		} else {
			this.undrawable = false;
		}

		this.hidden = false;

		this.title = data.title;
		this.text = data.text;

		this.marked = false;
	}
}
