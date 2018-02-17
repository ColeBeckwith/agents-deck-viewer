import { Card } from './Card';

export class Deck {
	public cards: Array<Card> = [];

	public id: string;

	public cardType: string;
	public modifier: string | number;

	public discardPile: Array<Card> = [];

	constructor(data) {
		this.cardType = data.cardType;
		this.modifier = data.modifier;
	}

	public shuffle(): void {
		for (let i = this.cards.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}

	public addToTop(card: Card): void {
		this.cards.unshift(card);
	}

	public shuffleAll() {
		this.addDiscardToBottom();
		this.shuffle();
	}

	public addDiscardToBottom(): void {
		let tempDiscard = [];
		this.discardPile.forEach((card: any) => {
			if (card.undrawable) {
				tempDiscard.push(card);
			} else {
				this.cards.push(card);
			}
		});
		this.discardPile = tempDiscard;
	}

	public draw(): Card {
		if (this.cards.length === 0) {
			this.addDiscardToBottom();
			this.shuffle();
		}

		if (this.cards.length === 0) {
			console.error(`No card left to draw from ${this.cardType} Deck. Modifier ${this.modifier}`);
		}

		return this.cards.shift();
	}

	public drawByProperty(propertyName: string, property: any, discarded: boolean = false): Card {
		for (let i = 0; i < this.cards.length; i++) {
			let card = this.cards[i];
			if (card[propertyName] === property) {
				return this.cards.splice(i, 1)[0];
			}
		}

		// Search even the discard pile.
		if (discarded) {
			for (let i = 0; i < this.cards.length; i++) {
				let card = this.discardPile[i];
				if (card[propertyName] === property) {
					return this.discardPile.splice(i, 1)[0];
				}
			}
		}
		console.error(`Card with property ${propertyName}: ${property} was not found.`);
	}

	public discard(card: Card) {
		this.discardPile.unshift(card);
	}

	public addCard(card: Card): void {
		this.cards.push(card);
	}
}
