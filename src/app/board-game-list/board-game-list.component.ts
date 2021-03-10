import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {IBoardGame} from '../interface';


@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.css']
})
export class BoardGameListComponent {
  @Input() boardGamesList: Array<IBoardGame>;
  @Input() loading: boolean;
  @Input() selectedBoardGame: IBoardGame;
  @Output() onSelected = new EventEmitter<IBoardGame>();
  @Output() onRemoved = new EventEmitter<number>();

  selectItem(item: IBoardGame) {
    this.onSelected.emit(item);
  }

  removeBoardGame(id: number) {
    this.onRemoved.emit(id);
  }
}
