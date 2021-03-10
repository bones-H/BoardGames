import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBoardGame } from '../interface';

@Component({
  selector: 'app-board-game-display',
  templateUrl: './board-game-display.component.html',
  styleUrls: ['./board-game-display.component.css'],
})
export class BoardGameDisplayComponent implements OnInit {
  rating = 5;
  @Input() selectedBoardGame: IBoardGame;
  @Output() onRating = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  updateRating() {
    this.onRating.emit(this.rating);
  }
}
