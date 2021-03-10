import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  getBoardGames,
  getFilterForm, getLoading,
  getSelectedBoardGame,
  State,
} from './store';
import {AddBoardGame, GetBoardGames, RemoveBoardGame, SelectItem, UpdateFilterForm, UpdateRating} from './store/board-games/actions';
import { IBoardGame, IFilterForm } from './interface';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  boardGamesList$ = this.store.pipe(select(getBoardGames));
  selectedBoardGame$ = this.store.pipe(select(getSelectedBoardGame));
  filterForm$ = this.store.pipe(select(getFilterForm));
  loading$ = this.store.pipe(select(getLoading));
  filteredList$: Observable<IBoardGame[]>;

  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(new GetBoardGames());
    this.filteredList$ = combineLatest(this.boardGamesList$, this.filterForm$).pipe(
      map(([arr, filterForm]) => {
        return arr.filter((item) =>
          filterForm.bought === null
            ? item.name.includes(filterForm.name)
            : item.bought === filterForm.bought &&
              item.name.includes(filterForm.name)
        );
      })
    );
  }

  pushSelectedBoardGame(event: IBoardGame) {
    this.store.dispatch(new SelectItem(event));
  }

  pushFilterForm(event: IFilterForm) {
    this.store.dispatch(new UpdateFilterForm(event));
  }
  pushNewBoardGame(event: IBoardGame) {
    this.store.dispatch(new AddBoardGame(event));
  }

  removeBoardGame(event: number) {
    this.store.dispatch(new RemoveBoardGame(event));
  }

  pushRating(event) {
    this.store.dispatch(new UpdateRating(event));
  }

  // toJson() {
  //   this.boardGamesList$.subscribe(data => {
  //     console.log(JSON.stringify(data));
  //   })
  // }
}
