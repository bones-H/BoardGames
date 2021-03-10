import { IBoardGame, IFilterForm } from '../../interface';
import { ActionTypes } from './actions';
import { find } from 'rxjs/operators';

export interface IBoardGameState {
  boardGames: Array<IBoardGame>;
  selected: IBoardGame;
  loading: boolean;
  filterForm: IFilterForm;
}
const initialState: IBoardGameState = {
  boardGames: [
    // {
    //   id: 1,
    //   name: 'game1',
    //   imageSrc: 'https://imgholder.ru/200x150/8493a8/adb9ca&text=Game1',
    //   description: 'about game1',
    //   bought: true,
    //   rating: null,
    // },
    // {
    //   id: 2,
    //   name: 'game2',
    //   imageSrc: 'https://imgholder.ru/200x150/8493a8/adb9ca&text=Game2',
    //   description: 'about game2',
    //   bought: true,
    //   rating: 8,
    // },
    // {
    //   id: 3,
    //   name: 'game3',
    //   imageSrc: 'https://imgholder.ru/200x150/8493a8/adb9ca&text=Game3',
    //   description: 'about game3',
    //   bought: false,
    //   rating: null,
    // },
  ],
  selected: null,
  loading: false,
  filterForm: {
    name: '',
    bought: null,
  },
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_BOARD_GAMES: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.GET_BOARD_GAMES_FAILED: {
      console.log(action.payload);
      return {
        ...state,
        loading: false
      };
    }
    case ActionTypes.GET_BOARD_GAMES_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        boardGames: [...action.payload],
        loading: false
      };
    }
    // case ActionTypes.UPDATE_BOARDGAMES_LIST: {
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     boardGames: [...action.payload]
    //   };
    // }
    case ActionTypes.SELECT: {
      return {
        ...state,
        selected:
          action.payload.id === state.selected?.id
            ? null
            : { ...action.payload },
      };
    }
    case ActionTypes.UPDATE_FILTER_FORM: {
      return {
        ...state,
        filterForm: { ...action.payload },
      };
    }
    case ActionTypes.UPDATE_RATING: {
      const boardGame = state.boardGames.find(item => item.id === state.selected.id);
      const newArr = state.boardGames.filter(item => item.id !== boardGame.id);
      return {
        ...state,
        selected: {
          ...state.selected,
          rating: action.payload
        },
        boardGames: [
            ...newArr,
            { ...boardGame,
              rating: action.payload
            }
          ]
      };
    }
    case ActionTypes.ADD_BOARD_GAME: {
      const lastItem = state.boardGames[state.boardGames.length - 1];
      return {
        ...state,
        boardGames: [
          ...state.boardGames,
          { ...action.payload, id: lastItem.id + 1 },
        ],
      };
    }
    case ActionTypes.REMOVE_BOARD_GAME: {
      const newArr = state.boardGames.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        boardGames: [...newArr],
        selected: state.selected?.id === action.payload ? null : state.selected,
      };
    }
    default:
      return state;
  }
}

export const selectBoardGamesList = (state: IBoardGameState) =>
  state.boardGames;
export const selectSelectedBoardGame = (state: IBoardGameState) =>
  state.selected;
export const selectFilterForm = (state: IBoardGameState) =>
  state.filterForm;
export const selectLoading = (state: IBoardGameState) =>
  state.loading;

