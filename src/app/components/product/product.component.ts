import { ShopbotListService } from '@svc/shopbot-list/shopbot-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product, Offer } from '@svc/get-upc-data/get-upc-data-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()offer;
  @Input()product;
  constructor(private shopbot:ShopbotListService) { }

  addProductToList(product:Product,offer:Offer) {
    //let offersArray:Array<Offer> = product.offers;
    product.offer_choice = product.offers.indexOf(offer);
    this.shopbot.addProduct(product)
    .then(ref=> {
      console.log(ref.key);
      console.log(product.offers[product.offer_choice]);
    });
  }
  ngOnInit() {
  }
}