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

	public addDiscardToBottom(): void {
		this.discardPile.forEach((card) => {
			this.cards.push(card);
		});
		this.discardPile = [];
	}

	public draw(): Card {
		if (this.cards.length === 0) {
			this.addDiscardToBottom();
			this.shuffle();
		}

		if (this.cards.length === 0) {
			console.error('No cards left to draw from:' + this.id)
		}

		return this.cards.shift();
	}

	public discard(card: Card) {
		this.discardPile.unshift(card);
	}

	public addCard(card: Card): void {
		this.cards.push(card);
	}
}
