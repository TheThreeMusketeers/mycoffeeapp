import { MdSnackBar } from '@angular/material';
import { CoffeeService } from './../../services/coffee.service';
import { TastingRating } from './../../models/tastingRating';
import { GeolocationService } from './../../services/geolocation.service';
import { Coffee } from './../../models/coffee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
})
export class CoffeeFormComponent implements OnInit {
  routingSubscription:any;
  coffee:Coffee;
  tastingEnabled : boolean = false;
  types = ["Expresso","Ristretto","Americano","Cappucino","Frappe"];

  constructor(private route:ActivatedRoute,
              private geolocationService:GeolocationService,
              private router:Router,
              private coffeeService:CoffeeService,
              private snackBar:MdSnackBar) { }

  ngOnInit() {
    this.coffee = new Coffee();

    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params['id']);
      if(params['id']){
        this.coffeeService.getCoffee(params['id'],response => {
          this.coffee = response;
          if(this.coffee.tastingRating){
            this.tastingEnabled = true;
          }
        });
      }
    });

    this.geolocationService.requestLocation(location => {
      if(location){
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
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
    this.coffeeService.save(this.coffee,result =>{
      if(result){
        this.router.navigate(['/']);
        this.snackBar.open("The record has been successfully saved.","",{duration:3000});
      }
    });
  }//save

  cancel(){
    this.router.navigate(['/']);
  }//cancel
}//cs
