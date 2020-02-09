import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideMoveComponent } from './decide-move.component';

describe('DecideMoveComponent', () => {
  let component: DecideMoveComponent;
  let fixture: ComponentFixture<DecideMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecideMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecideMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
