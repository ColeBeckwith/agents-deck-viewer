import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EncounterCardsComponent } from './encounter/encounter-cards/encounter-cards.component';
import { AbilityCardsComponent } from './ability/ability-cards/ability-cards.component';
import { CharacterCardsComponent } from './character/character-cards/character-cards.component';
import { AbilityCardComponent } from './ability/ability-cards/ability-card/ability-card.component';
import { EncounterCardComponent } from './encounter/encounter-cards/encounter-card/encounter-card.component';
import { CharacterCardComponent } from './character/character-cards/character-card/character-card.component';
import { DeckManagerService } from './board/board-deck-viewer/deck-manager/deck-manager.service';
import { BoardComponent } from './board/board.component';
import { PlayerSelectComponent } from './board/player-cards-viewer/player-select/player-select.component';
import { PlayerCardsViewerComponent } from './board/player-cards-viewer/player-cards-viewer.component';
import { BoardDeckViewerComponent } from './board/board-deck-viewer/board-deck-viewer.component';
import { AbilityDeckComponent } from './ability/ability-deck/ability-deck.component';
import { EncounterDeckComponent } from './encounter/encounter-deck/encounter-deck.component';
import { DeckStatsComponent } from './board/board-deck-viewer/deck-stats/deck-stats.component';
import { PlayerService } from './player-service/player.service';
import { CharacterSelectComponent } from './board/character-select/character-select.component';
import { InfiltrationDeckComponent } from './infiltration/infiltration-deck/infiltration-deck.component';
import { BoardService } from './board/board-service/board.service';
import { BoardLayoutComponent } from './board/board-layout/board-layout.component';
import { BoardUtilitiesComponent } from './board/board-utilities/board-utilities.component';
import { DiceRollerComponent } from './board/board-utilities/dice-roller/dice-roller.component';
import { MarkerComponent } from './board/marker-container/marker/marker.component';
import { MarkerContainerComponent } from './board/marker-container/marker-container.component';
import { LootCardsComponent } from './loot/loot-cards/loot-cards.component';
import { LootCardComponent } from './loot/loot-cards/loot-card/loot-card.component';
import { EquipmentCardsComponent } from './equipment/equipment-cards/equipment-cards.component';
import { EquipmentCardComponent } from './equipment/equipment-cards/equipment-card/equipment-card.component';
import { EquipmentDeckComponent } from './equipment/equipment-deck/equipment-deck.component';
import { AftermathCardsComponent } from './aftermath/aftermath-cards/aftermath-cards.component';
import { AftermathCardComponent } from './aftermath/aftermath-cards/aftermath-card/aftermath-card.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CardinalSpinnerComponent } from './board/board-utilities/cardinal-spinner/cardinal-spinner.component';
import { InfiltrationCardsComponent } from './infiltration/infiltration-cards/infiltration-cards.component';
import { InfiltrationCardComponent } from './infiltration/infiltration-cards/infiltration-card/infiltration-card.component';
import { CardPoolComponent } from './card-pool/card-pool.component';

@NgModule({
	declarations: [
		AppComponent,
		AbilityCardComponent,
		AbilityCardsComponent,
		AbilityDeckComponent,
		BoardComponent,
		BoardDeckViewerComponent,
		BoardLayoutComponent,
		BoardUtilitiesComponent,
		CharacterCardComponent,
		CharacterCardsComponent,
		CharacterSelectComponent,
		DeckStatsComponent,
		DiceRollerComponent,
		EncounterCardComponent,
		EncounterCardsComponent,
		EncounterDeckComponent,
		InfiltrationDeckComponent,
		PlayerCardsViewerComponent,
		PlayerSelectComponent,
		MarkerComponent,
		MarkerContainerComponent,
		LootCardsComponent,
		LootCardComponent,
		EquipmentCardsComponent,
		EquipmentCardComponent,
		EquipmentDeckComponent,
		AftermathCardsComponent,
		AftermathCardComponent,
		CardComponent,
		CardinalSpinnerComponent,
		InfiltrationCardsComponent,
		InfiltrationCardComponent,
		CardPoolComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		RouterModule.forRoot(
			[
				{ path: 'encounter-cards', component: EncounterCardsComponent },
				{ path: 'ability-cards', component: AbilityCardsComponent },
				{ path: 'character-cards', component: CharacterCardsComponent },
				{ path: 'loot-cards', component: LootCardsComponent },
				{ path: 'equipment-cards', component: EquipmentCardsComponent },
				{ path: 'infiltration-cards', component: InfiltrationCardsComponent },
				{ path: 'game', component: BoardComponent }
			]
		)
	],
	providers: [
		DeckManagerService,
		PlayerService,
		BoardService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
