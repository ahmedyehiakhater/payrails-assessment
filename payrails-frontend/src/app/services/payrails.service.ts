import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = "http://localhost:3002";
@Injectable({
  providedIn: 'root'
})
export class PayrailsService {
  constructor(public http: HttpClient) { }

  initClient() {
    this.http.get(apiURL).subscribe(response => {
      console.log("RESPONSE", response);
    },
      error => {
        console.log("ERROR", error);
      });
  }
}
