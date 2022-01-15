import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMockupComponent } from './phone-mockup.component';

describe('PhoneMockupComponent', () => {
  let component: PhoneMockupComponent;
  let fixture: ComponentFixture<PhoneMockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneMockupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
