import { TastingRating } from './../../models/tastingRating';
import { GeolocationService } from './../../services/geolocation.service';
import { Coffee } from './../../models/coffee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
})
export class CoffeeFormComponent implements OnInit {
  routingSubscription:any;
  coffee:Coffee;
  types = ["Expresso","Ristretto","Americano","Cappucino","Frappe"];

  constructor(private route:ActivatedRoute,
              private geolocationService:GeolocationService) { }

  ngOnInit() {
    this.coffee = new Coffee();

    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params['id']);
    });

    this.geolocationService.requestLocation(location => {
      if(location){
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longtitude = location.longtitude;
      }
    });
  }//ngOnInit

  ngOnDestroy(){
    this.routingSubscription.unsubscribe();
  }

  tastingRatingChanged(checked:boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }//tastingRatingChanged

  save(){

  }//save

  cancel(){

  }//cancel
}//cs
