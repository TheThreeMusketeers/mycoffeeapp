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

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.coffee = new Coffee();

    this.routingSubscription = this.route.params.subscribe(params =>{
      console.log(params['id']);
    });
  }//ngOnInit

  ngOnDestroy(){
    this.routingSubscription.unsubscribe();
  }
}//cs
