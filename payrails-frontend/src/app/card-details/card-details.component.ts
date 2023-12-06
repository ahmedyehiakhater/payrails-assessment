import { Component, OnInit } from '@angular/core';
import { PayrailsService } from '../services/payrails.service';
import { EncryptionService } from '../services/encryption.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  constructor(public payrailsService: PayrailsService, public encryptionService: EncryptionService) { }

  creditCardModel: any = {};
  publicKey: string = '';
  clientCredentials: any;
  ngOnInit(): void {
    this.payrailsService.initClient().subscribe((clientCredentials: any) => {
      this.creditCardModel.holderReference = clientCredentials.holderReference;
      this.publicKey = clientCredentials.publicKey;
      this.clientCredentials = clientCredentials;
    })
  }

  onSubmit() {
    this.encryptionService.encryptData(this.creditCardModel, this.publicKey).then(encryptedValue => {
      let paymentDetails = {
        "holderReference": this.creditCardModel.holderReference,
        "encryptedInstrumentDetails": encryptedValue,
        "futureUsage": "CardOnFile",
        "storeInstrument": true
      }
      this.payrailsService.createPaymentInstrument(paymentDetails).subscribe(result => {
        console.log("RESULT", result)
      },
        error => {
          console.log("ERROR", error);
        })
    });
  }
}
