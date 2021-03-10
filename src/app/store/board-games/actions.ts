import {Action} from '@ngrx/store';
import {IBoardGame, IFilterForm} from '../../interface';

export const ActionTypes = {
  GET_BOARD_GAMES: '[BoardGamesList] Get board games',
  GET_BOARD_GAMES_FAILED: '[BoardGamesList] Get board games fail',
  GET_BOARD_GAMES_SUCCESS: '[BoardGamesList] Get board games success',
  UPDATE_BOARDGAMES_LIST: '[BoardGamesList] Update board games',
  SELECT: '[BoardGamesList] Select item',
  UPDATE_FILTER_FORM: '[Filter] Update form',
  UPDATE_RATING: '[BoardGamesDisplay] Update rating',
  ADD_BOARD_GAME: '[AddBoardGame] Add new game',
  REMOVE_BOARD_GAME: '[BoardGamesList] Remove board game',
};
export class GetBoardGames implements Action {
  readonly type = ActionTypes.GET_BOARD_GAMES;
  constructor(public payload?: string){}
}
export class GetBoardGamesFailed implements Action {
  readonly type = ActionTypes.GET_BOARD_GAMES_FAILED;
  constructor(public payload?: string){}
}
export class GetBoardGamesSuccess implements Action {
  readonly type = ActionTypes.GET_BOARD_GAMES_SUCCESS;
  constructor(public payload: Array<IBoardGame>){}
}
export class UpdateBoardGamesList implements Action {
  readonly type = ActionTypes.UPDATE_BOARDGAMES_LIST;
  constructor(public payload: Array<IBoardGame>){}
}
export class SelectItem implements Action {
  readonly type = ActionTypes.SELECT;
  constructor(public payload: IBoardGame){}
}
export class UpdateFilterForm implements Action {
  readonly type = ActionTypes.UPDATE_FILTER_FORM;
  constructor(public payload: IFilterForm){}
}
export class UpdateRating implements Action {
  readonly type = ActionTypes.UPDATE_RATING;
  constructor(public payload: number){}
}
export class AddBoardGame implements Action {
  readonly type = ActionTypes.ADD_BOARD_GAME;
  constructor(public payload: IBoardGame){}
}
export class RemoveBoardGame implements Action {
  readonly type = ActionTypes.REMOVE_BOARD_GAME;
  constructor(public payload: number){}
}
