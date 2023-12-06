import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { PayrailsService } from './services/payrails.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCreditCardModule } from 'angular-credit-card';
import { EncryptionService } from './services/encryption.service';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCreditCardModule
  ],
  providers: [PayrailsService, EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
