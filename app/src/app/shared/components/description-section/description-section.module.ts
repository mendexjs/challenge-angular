import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryActionCardComponent } from './secondary-action-card/secondary-action-card.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [SecondaryActionCardComponent],
  exports: [
    SecondaryActionCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DescriptionSectionModule { }
