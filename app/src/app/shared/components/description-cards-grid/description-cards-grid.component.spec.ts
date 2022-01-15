import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCardsGridComponent } from './description-cards-grid.component';

describe('DescriptionCardsGridComponent', () => {
  let component: DescriptionCardsGridComponent;
  let fixture: ComponentFixture<DescriptionCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionCardsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
