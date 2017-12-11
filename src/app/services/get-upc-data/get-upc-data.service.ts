import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Product } from './get-upc-data-model';

@Injectable()
export class GetUpcDataService {

  constructor(public http: Http) {
  }

  getUpcData(uupc:string){
    console.log(uupc)
    let upc:string =
    "https://cors-anywhere.herokuapp.com/" +
    "https://api.upcitemdb.com/prod/trial/lookup?upc=" +
    uupc;
    console.log(upc)
    return this.http.get(upc)
    .map(res => res.json().items)
    .map(products=>products
      .map(product=>new Product(product)));
  }
}