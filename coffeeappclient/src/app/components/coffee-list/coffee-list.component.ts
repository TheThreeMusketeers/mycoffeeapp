import { ConfirmDialogTemplateComponent } from './../shared/confirm-dialog-template.component';
import { GeolocationService } from './../../services/geolocation.service';
import { Router } from '@angular/router';
import { Coffee } from './../../models/coffee';
import { CoffeeService } from './../../services/coffee.service';
import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffeeList:[Coffee];
  animal: string;
  name: string;
  constructor(private coffeeService:CoffeeService,
              private router:Router,
              private geolocationService:GeolocationService,
              public dialog:MdDialog,
              private snackBar:MdSnackBar) { }

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
    console.log("sharing...");
    const shareText = `I had this cofee at ${coffee.place} and for me it is a ${coffee.rating} star.`;
    console.log(shareText);
    if('share' in navigator){
      (navigator as any).share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(()=>console.log("shared")).catch(()=>console.log("error in sharing"));
    } else {
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      console.log(shareUrl);
      location.href = shareUrl;
      
    }
  }//share

  delete(coffee:Coffee) {
    let dialogRef = this.dialog.open(ConfirmDialogTemplateComponent, {
      width: '250px',
      data: { title: 'Delete Cofee?',subtitle:'Do you want to delete this record?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.coffeeService.delete(coffee._id,resp => {
          var index = this.coffeeList.findIndex(c => c._id === coffee._id);
          if(index>-1) {
            this.coffeeList.splice(index,1);
            this.snackBar.open("The record has been deleted.","",{duration:5000});
          }
        });
      }
    });
  }//delete

}//cs
