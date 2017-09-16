import { GeolocationService } from './../../services/geolocation.service';
import { Router } from '@angular/router';
import { Coffee } from './../../models/coffee';
import { CoffeeService } from './../../services/coffee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffeeList:[Coffee]
  constructor(private coffeeService:CoffeeService,
              private router:Router,
              private geolocationService:GeolocationService) { }

  ngOnInit() {
    this.coffeeService.getList(list => {
      this.coffeeList = list;
    });
  }//ngOnInit

  goDetails(coffee : Coffee){
    this.router.navigate(['/coffee',coffee._id]);
  }//goDetails

  goMap(coffee:Coffee){
    const mapURL = this.geolocationService.getMapLink(coffee.location);
    location.href = mapURL;
  }//goMap

  share(coffee:Coffee){
    /* if('share' in navigator){
      navigator.share({
        title: coffee.name,
        text:`I have this coffee at ${coffee.place} and for me it is good`,
        url: window.location.href()
      }).then
    }
    else{
      //Whatsupa gönder
    } */
  }//share

}//cs
