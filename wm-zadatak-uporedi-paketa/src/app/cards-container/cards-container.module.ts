import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from './cards-container.component';
import { CardContainerModule } from '../card-container/card-container.module';



@NgModule({
  imports: [
    CommonModule,
    CardContainerModule
  ],
  declarations: [CardsContainerComponent],
  exports: [CardsContainerComponent]
})
export class CardsContainerModule { }
