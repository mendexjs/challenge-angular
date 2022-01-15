import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActionCardComponent } from './secondary-action-card.component';

describe('SecondaryActionCardComponent', () => {
  let component: SecondaryActionCardComponent;
  let fixture: ComponentFixture<SecondaryActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
