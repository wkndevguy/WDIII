import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

import { GetUpcDataService } from '@svc/get-upc-data/get-upc-data.service';
import { ProductComponent } from '@comp/product/product.component';
import { Offer } from '@svc/get-upc-data/get-upc-data-model';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  //directs where focus should be on page load
  //(via setFocus() function)
  @ViewChild('focusInput') inputFocus;
  @Input()digits;
  dataArray:Array<any>;
  userUpc:string;
  constructor(
    public http: Http,
    public upcService: GetUpcDataService,
    public snackBar:MatSnackBar) {
  }
  //checks for blanks or not 12 digits
  checkDigits(digits:string) {
    let notNull:boolean = false;
    if(digits) {
      notNull = true;
    } else {
      let message:string = 
      "UPC cannot be blank.";
      this.snackBar.open(message, "CLOSE", {
        duration:3000,
      });
    }
    if(notNull) {
      //console.log(digits.length);
      if(digits.length === 12) {
        this.getItem(digits);
      } else {
        let diff:number = 12-digits.length;
        let message:string = 
          "UPC must be 12 numbers. Please enter " + diff + " more digits.";
        this.snackBar.open(message, "CLOSE", {
          duration:3000,
        });
      }
    }
  }
  //calls the upc-data service with the entered upc code
  getItem(digits:string) {
    //this.userUpc = "034000701742"
    this.userUpc = digits;
    let data = this.upcService.getUpcData(this.userUpc);
    //console.log("call made");
    data.subscribe(data => {
      this.dataArray = data;
      //this.itemObject = Array.of(data).entries;
      this.dataArray[0].offers.sort((offerA:Offer,offerB:Offer)=>offerA.price - offerB.price);
      console.log(this.dataArray);
      //console.log(this.itemObject);
    }, err => {
      let message:string = 
      "A product with UPC " + this.userUpc + " was not found. Please check the numbers.";
      this.snackBar.open(message, "CLOSE", {
        duration:3000,
      });
    });
  }
  //opens web page of product 
  openExternal(url:HTMLLinkElement) {
    window.open(url.href, "_system");
  }
  ngOnInit() {
    setTimeout(() => {
      this.inputFocus.setFocus();
    },1000); //a least 150ms.
  }
}