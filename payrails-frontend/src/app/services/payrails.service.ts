import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = "http://localhost:3002";
const mockTokenizationURL = "http://localhost:3001/public/payment/instruments/tokenize"
@Injectable({
  providedIn: 'root'
})
export class PayrailsService {
  constructor(public http: HttpClient) { }

  initClient() {
    return this.http.get(apiURL);
  }
  createPaymentInstrument(encPaymentDetails: any) {
    return this.http.post(mockTokenizationURL, encPaymentDetails);
  }
}
