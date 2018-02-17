import { CharacterCard } from './CharacterCard';
import { AbilityCard } from './AbilityCard';
import { EquipmentCard } from './EquipmentCard';

export class Player {
	public character: CharacterCard;
	public abilityCards: Array<AbilityCard> = [];
	public equipmentCards: Array<EquipmentCard> = [];

	addToHand(card) {
		if (card instanceof AbilityCard) {
			this.abilityCards.push(card);
		}

		if (card instanceof EquipmentCard) {
			this.equipmentCards.push(card);
		}
	}

}
