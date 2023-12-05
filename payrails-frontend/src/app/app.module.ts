import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { PayrailsService } from './services/payrails.service';
import { HttpClientModule } from '@angular/common/http';
import { NgCreditCardModule } from 'angular-credit-card';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCreditCardModule
  ],
  providers: [PayrailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
