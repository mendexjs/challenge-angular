import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import {ngxUiLoaderConfig} from "./shared/configs/loaderConfig";
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AnticipationComponent } from './routes/anticipation/anticipation.component';
import { DigitalAccountComponent } from './routes/digital-account/digital-account.component';
import { LoansComponent } from './routes/loans/loans.component';
import {ComponentsModule} from "./shared/components/components.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnticipationComponent,
    DigitalAccountComponent,
    LoansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
