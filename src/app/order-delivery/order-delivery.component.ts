import { Component, OnInit } from '@angular/core';
import { Cyties } from '../models/city';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.css']
})
export class OrerDeliveryComponent implements OnInit { 
  cities :Cyties[] = [];
  selectedCity: string = '';
  cityName = ''; 

  formSender: any = {
    senderName: null,
    senderPhone: null,
    pickupAdress: null,
    senderCity: null
  };
  formReceiver: any = {
    receiverName: null,
    receiverPhone: null,
    receiverAdress: null,
    receiverCity: null
  };
  constructor(private appService: AppService) { }

  ngOnInit(): void {
     
    this.appService.getCities().subscribe({  
      next: data => {
        data.forEach((el : any) => {
          this.cities.push({
            enName:el.enName,
            heName: el.heName,
            price: el.price
          }); 
          
        })   
      }
      // error: err => {
      //   this.content = JSON.parse(err.error).message;
      // }
      });
   
  }
   
}
