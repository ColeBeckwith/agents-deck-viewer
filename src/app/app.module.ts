import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EncounterCardsComponent } from './encounter-cards/encounter-cards.component';

@NgModule({
	declarations: [
		AppComponent,
		EncounterCardsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			[
				{ path: 'encounter-cards', component: EncounterCardsComponent }
			]
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
