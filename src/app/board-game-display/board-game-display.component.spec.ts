import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameDisplayComponent } from './board-game-display.component';

describe('BoardGameDisplayComponent', () => {
  let component: BoardGameDisplayComponent;
  let fixture: ComponentFixture<BoardGameDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGameDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
