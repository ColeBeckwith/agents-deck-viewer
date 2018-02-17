import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { PlayerService } from '../../player-service/player.service';
import { Card } from '../../../classes/Card';
import { DeckManagerService } from '../board-deck-viewer/deck-manager/deck-manager.service';
import { EquipmentCard } from '../../../classes/EquipmentCard';
import { AbilityCard } from '../../../classes/AbilityCard';

@Component({
	selector: 'agt-player-cards-viewer',
	templateUrl: './player-cards-viewer.component.html',
	styleUrls: ['./player-cards-viewer.component.scss']
})
export class PlayerCardsViewerComponent implements OnInit {
	activeCards: string = 'Equipment';
	equipmentCardActions = ['Equip', 'Discard'];
	abilityCardActions = ['Discard'];

	@HostBinding('class.hovered') hovered = true;

	@HostListener('mouseenter') handleMouseEnter() {
		this.hovered = true;
	}

	constructor(public playerService: PlayerService,
				public deckManager: DeckManagerService) {
	}

	ngOnInit() {
	}

	hide() {
		this.hovered = false;
	}

	handleCardAction(action: string, card: Card, index: number) {
		if (action === 'Discard') {
			this.deckManager.discardCard(card);

			if (card instanceof EquipmentCard) {
				this.playerService.activePlayer.equipmentCards.splice(index, 1);
			}

			if (card instanceof AbilityCard) {
				this.playerService.activePlayer.abilityCards.splice(index, 1);
			}
		}

		if (action === 'Equip') {
			if (card instanceof EquipmentCard) {
				card.equipped = true;

				this.playerService.activePlayer.equipmentCards.sort((a, b) => (a.equipped === b.equipped) ? 0 : a.equipped ? -1 : 1 )
			}
		}
	}

}
