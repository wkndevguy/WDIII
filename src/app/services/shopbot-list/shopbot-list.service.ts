import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

import { Product } from '@svc/get-upc-data/get-upc-data-model';

@Injectable()
export class ShopbotListService {
  userId: string;
  //private shopbotListReference = this.db.list<Product>('product-list');
  
    constructor(
      private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
          if(user) {
            //builds string for items under user's node
            this.userId = "product-list/" + user.uid;
          }
        });
    }
  //returns items under current user's node
  getShopbotList() {
    //builds string for items under user's node
    //(can't use from constructor here)
    this.userId = "product-list/" + this.afAuth.auth.currentUser.uid;
    let shopbotList = this.db.list<Product>(this.userId);
    return shopbotList;
  }
  //Adds product to current user's list
  addProduct(product:Product) {
    let shopbotList = this.db.list<Product>(this.userId);
    return shopbotList.push(product);
  }
  //Removes product matching the product.key from current user's list
  removeProduct(product:Product) {
    let shopbotList = this.db.list<Product>(this.userId);
    return shopbotList.remove(product.key);
  }
}