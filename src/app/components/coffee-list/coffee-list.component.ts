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
  constructor(private coffeeService:CoffeeService) { }

  ngOnInit() {
    this.coffeeService.getList(list => {
      this.coffeeList = list;
    });
  }//ngOnInit

}//cs
