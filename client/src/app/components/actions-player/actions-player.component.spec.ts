import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPlayerComponent } from './actions-player.component';

describe('ActionsPlayerComponent', () => {
  let component: ActionsPlayerComponent;
  let fixture: ComponentFixture<ActionsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
