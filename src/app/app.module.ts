import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EncounterCardsComponent } from './encounter-cards/encounter-cards.component';
import { AbilityCardsComponent } from './ability-cards/ability-cards.component';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
import { AbilityCardComponent } from './ability-cards/ability-card/ability-card.component';
import { EncounterCardComponent } from './encounter-cards/encounter-card/encounter-card.component';
import { CharacterCardComponent } from './character-cards/character-card/character-card.component';
import { DeckManagerService } from './deck-manager/deck-manager.service';
import { BoardComponent } from './board/board.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { PlayerCardsViewerComponent } from './player-cards-viewer/player-cards-viewer.component';
import { BoardDeckViewerComponent } from './board-deck-viewer/board-deck-viewer.component';
import { AbilityDeckComponent } from './ability-deck/ability-deck.component';
import { EncounterDeckComponent } from './encounter-deck/encounter-deck.component';
import { DeckStatsComponent } from './deck-stats/deck-stats.component';

@NgModule({
	declarations: [
		AppComponent,
		EncounterCardsComponent,
		AbilityCardsComponent,
		CharacterCardsComponent,
		AbilityCardComponent,
		EncounterCardComponent,
		CharacterCardComponent,
		BoardComponent,
		PlayerSelectComponent,
		PlayerCardsViewerComponent,
		BoardDeckViewerComponent,
		AbilityDeckComponent,
		EncounterDeckComponent,
		DeckStatsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			[
				{ path: 'encounter-cards', component: EncounterCardsComponent },
				{ path: 'ability-cards', component: AbilityCardsComponent },
				{ path: 'character-cards', component: CharacterCardsComponent },
				{ path: 'game', component: BoardComponent }
			]
		)
	],
	providers: [ DeckManagerService ],
	bootstrap: [AppComponent]
})
export class AppModule {
}
