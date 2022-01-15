import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DescriptionCardsGridComponent} from "./description-cards-grid/description-cards-grid.component";
import {DescriptionSectionComponent} from "./description-section/description-section.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {ServiceCardsGridComponent} from "./service-cards-grid/service-cards-grid.component";
import {DescriptionSectionModule} from "./description-section/description-section.module";
import {MainContentModule} from "./main-content/main-content.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    DescriptionCardsGridComponent,
    DescriptionSectionComponent,
    ServiceCardsGridComponent
  ],
  imports: [
    CommonModule,
    DescriptionSectionModule,
    MainContentModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    DescriptionCardsGridComponent,
    DescriptionSectionComponent,
    ServiceCardsGridComponent
  ]
})
export class ComponentsModule { }
