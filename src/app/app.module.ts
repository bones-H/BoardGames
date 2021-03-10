import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {reducers} from './store';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { BoardGameDisplayComponent } from './board-game-display/board-game-display.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddBoardGameComponent } from './add-board-game/add-board-game.component';
import {HttpClientModule} from '@angular/common/http';
import {AppEffects} from './store/board-games/effects';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameListComponent,
    BoardGameDisplayComponent,
    FilterComponent,
    AddBoardGameComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
