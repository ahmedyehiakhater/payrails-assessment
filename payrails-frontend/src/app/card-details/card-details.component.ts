import { Component, OnInit } from '@angular/core';
import { PayrailsService } from '../services/payrails.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  constructor(public payrailsService: PayrailsService) { }

  creditCardModel: any = [];
  
  ngOnInit(): void {
    this.payrailsService.initClient();
  }
}
