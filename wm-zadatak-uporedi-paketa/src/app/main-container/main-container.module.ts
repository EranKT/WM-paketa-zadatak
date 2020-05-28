import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent],
})
export class MainContainerModule { }
