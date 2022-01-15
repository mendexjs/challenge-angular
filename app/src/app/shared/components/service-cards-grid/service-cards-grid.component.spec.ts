import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardsGridComponent } from './service-cards-grid.component';

describe('ServiceCardsGridComponent', () => {
  let component: ServiceCardsGridComponent;
  let fixture: ComponentFixture<ServiceCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCardsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
