import { PlaceLocation } from './../models/placeLocation';
import { Coffee } from './../models/coffee';
import { Injectable } from '@angular/core';

@Injectable()
export class CoffeeService {

  constructor() { }

  getList(callback){
    const list = [
      new Coffee("Double Expresso","Sunny Cafe",new PlaceLocation("123 Market St.","San Francisco")),
      new Coffee("Caramel Americano","Starcoffee",new PlaceLocation("Gran Via 34.","Madrid"))
    ];
    callback(list);
  }//getList

  save(coffee,callback){
    callback(true);
  }//save

}//cs
