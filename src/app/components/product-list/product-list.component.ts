import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Product } from './../../services/get-upc-data/get-upc-data-model';
import { ShopbotListService } from './../../services/shopbot-list/shopbot-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()product;
  shopbotList:Observable<Product[]>;
  constructor(
    private shopbot:ShopbotListService,
    public snackBar:MatSnackBar) {
    this.shopbotList = this.shopbot
      .getShopbotList()   // Retrieve the DB list
      .snapshotChanges()  //and also the key/value pairs for changes (delta)
      .map( //then map
        changes=> {  //the changes:
          return changes.map(change=> ({ //map each change's
            key: change.payload.key, ...change.payload.val() // key and value to a new object
          }))
        }
      );
    console.log(this.shopbotList);  
  }
  deleteProductFromList(product:Product) {
    console.log(product);
    this.shopbot.removeProduct(product);
    let message:string = product.title;
    this.snackBar.open("DELETED: " + message, "CLOSE", {
      duration:3000,
    });
  }
  ngOnInit() {
  }
}