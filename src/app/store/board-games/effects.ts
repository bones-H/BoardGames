import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';
import { ActionTypes } from './actions';

import * as actions from './actions';
import { DataService } from '../../services/data.service';
import {Observable, of} from 'rxjs';
@Injectable()
export class AppEffects {
  @Effect()
  data$: Observable<any> = this.actions$.pipe(
    ofType(ActionTypes.GET_BOARD_GAMES),
    switchMap( () => this.dataService.getJson().pipe(
      switchMap(data => of(new actions.GetBoardGamesSuccess(data))),
      catchError(err => of(new actions.GetBoardGamesFailed(err.statusText))),
    )
  ));
  constructor(private actions$: Actions, private dataService: DataService) {}
}
