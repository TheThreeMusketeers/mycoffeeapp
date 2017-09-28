import { environment } from './../../environments/environment';
import { PlaceLocation } from './../models/placeLocation';
import { Coffee } from './../models/coffee';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class CoffeeService {

  constructor(private http:Http) { }

  //public endpoint = "http://localhost:3000";
  public endpoint = environment.apiendpoint;

  getCoffee(id:string,callback){
    this.http.get(`${this.endpoint}/coffees/${id}`)
      .subscribe(response => {
        callback(response.json());
      });
  }//getCoffee

  getList(callback){
    this.http.get(`${this.endpoint}/coffees`)
      .subscribe(response => {
        callback(response.json());
      });
  }//getList

  save(coffee,callback){
    if(coffee._id){
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`,coffee)
        .subscribe(response => {
          callback(true);
        });
    }else {
      this.http.post(`${this.endpoint}/coffees`,coffee)
      .subscribe(response => {
        callback(true);
      });
    }
  }//save

  delete(id:string,callback){
    this.http.delete(`${this.endpoint}/coffees/${id}`)
      .subscribe(response => {
        callback(response.json());
      });
  }//delete

}//cs
