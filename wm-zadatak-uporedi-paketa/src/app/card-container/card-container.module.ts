import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container.component';
import { DetailsSectionContainerComponent } from './details-section-container/details-section-container.component';
import { SpecialOfferSectionContainerComponent } from './special-offer-section-container/special-offer-section-container.component';
import { PriceSectionContainerComponent } from './price-section-container/price-section-container.component';
// import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  imports: [
    CommonModule,
    // MatDividerModule

  ],
  declarations: [
    CardContainerComponent,
    DetailsSectionContainerComponent,
    SpecialOfferSectionContainerComponent,
    PriceSectionContainerComponent
  ],
  exports: [
    CardContainerComponent,
    DetailsSectionContainerComponent,
    SpecialOfferSectionContainerComponent,
    PriceSectionContainerComponent
  ]
})
export class CardContainerModule { }
