import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSectionContainerComponent } from './details-section-container.component';

describe('DetailsSectionContainerComponent', () => {
  let component: DetailsSectionContainerComponent;
  let fixture: ComponentFixture<DetailsSectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
