import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameListComponent } from './board-game-list.component';

describe('BoardGameListComponent', () => {
  let component: BoardGameListComponent;
  let fixture: ComponentFixture<BoardGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
