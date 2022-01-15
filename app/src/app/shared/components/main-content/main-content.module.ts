import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { TitleContentComponent } from './title-content/title-content.component';



@NgModule({
  declarations: [InfoCardsComponent, ActionCardComponent, TitleContentComponent],
  imports: [
    CommonModule
  ]
})
export class MainContentModule { }
