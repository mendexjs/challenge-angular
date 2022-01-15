import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card/action-card.component';
import { TitleContentComponent } from './title-content/title-content.component';
import {InfoCardsComponent} from "../info-cards/info-cards.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrMaskerModule} from "br-mask";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ActionCardComponent, TitleContentComponent, InfoCardsComponent],
  exports: [
    TitleContentComponent,
    ActionCardComponent,
    InfoCardsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrMaskerModule,
    MatIconModule,
  ]
})
export class MainContentModule { }
