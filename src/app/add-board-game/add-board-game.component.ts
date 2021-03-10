import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IBoardGame} from '../interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-board-game.component.html',
  styleUrls: ['./add-board-game.component.css']
})
export class AddBoardGameComponent implements OnInit {
  addGameForm: FormGroup;
  @Output() newGame = new EventEmitter<IBoardGame>();

  ngOnInit(): void {
     this.addGameForm = new FormGroup({
       name: new FormControl('', Validators.required),
       imageSrc: new FormControl('', Validators.required),
       description: new FormControl(''),
       bought: new FormControl(false),
    });
  }
  get name() {
    return this.addGameForm.get('name');
  }
  get imageSrc() {
    return this.addGameForm.get('imageSrc');
  }
  addGame() {
    this.newGame.emit(this.addGameForm.value);
    console.log(this.addGameForm.value);
  }
}
