import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSectionContainerComponent } from './price-section-container.component';

describe('PriceSectionContainerComponent', () => {
  let component: PriceSectionContainerComponent;
  let fixture: ComponentFixture<PriceSectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
