import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private snackBar:MdSnackBar){
    
  }

  updateNetworkStatusUI(){
    if(navigator.onLine){
      //You might be online
      (document.querySelector("body") as any).style = "";
    } else {
      //100% sure you are offline
      (document.querySelector("body") as any).style = "filter: grayscale(1)";
    }
    
  }//updateNetworkStatusUI

  ngOnInit(){
    this.updateNetworkStatusUI();
    window.addEventListener("online",this.updateNetworkStatusUI);
    window.addEventListener("offline",this.updateNetworkStatusUI);

    if((navigator as any).standalone==false){
      //This is an ios device and we are in the browser
      this.snackBar.open("You can add this PWA to the Home Screen","",{duration:5000});
    }

    if((navigator as any).standalone==undefined){
      //This is not ios device 
      if(window.matchMedia("(display-mode: browser").matches){
        //We are in the browser
        window.addEventListener("beforeinstallpromt",event =>{
          event.preventDefault();
          const sb = this.snackBar.open("Do you want to install this app?","Install",{duration:5000});
          sb.onAction().subscribe(()=>{
            (event as any).promt();
            (event as any).userChoice.then(result => {
              if(result.outcome=="dismissed"){
                //TODO: Track no installation
              } else {
                //TODO: It was installed
              }
            });
          });
          return false;
        });
      }
    }
    
  }//ngOnInit
}//cs
