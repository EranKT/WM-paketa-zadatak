import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsContainerComponent } from './cards-container.component';
import { CardContainerModule } from '../card-container/card-container.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CardContainerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CardsContainerComponent],
  exports: [CardsContainerComponent]
})
export class CardsContainerModule { }
