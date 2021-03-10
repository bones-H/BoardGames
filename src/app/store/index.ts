import {
  IBoardGameState,
  selectBoardGamesList, selectFilterForm, selectLoading,
  selectSelectedBoardGame,
} from './board-games/reducers';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromBoardGames from './board-games/reducers';

export interface State {
  boardGames: IBoardGameState;
}
export const reducers: ActionReducerMap<State> = {
  boardGames: fromBoardGames.reducer,
};

export const getBoardGamesState = (state: State) => state.boardGames;

export const getBoardGames = createSelector(
  getBoardGamesState,
  selectBoardGamesList
);
export const getSelectedBoardGame = createSelector(
  getBoardGamesState,
  selectSelectedBoardGame
);
export const getFilterForm = createSelector(
  getBoardGamesState,
  selectFilterForm
);
export const getLoading = createSelector(
  getBoardGamesState,
  selectLoading
);
