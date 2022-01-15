import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationComponent } from './anticipation.component';

describe('AnticipationComponent', () => {
  let component: AnticipationComponent;
  let fixture: ComponentFixture<AnticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
