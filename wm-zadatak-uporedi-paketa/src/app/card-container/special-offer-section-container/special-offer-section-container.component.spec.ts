import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferSectionContainerComponent } from './special-offer-section-container.component';

describe('SpecialOfferSectionContainerComponent', () => {
  let component: SpecialOfferSectionContainerComponent;
  let fixture: ComponentFixture<SpecialOfferSectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialOfferSectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOfferSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
