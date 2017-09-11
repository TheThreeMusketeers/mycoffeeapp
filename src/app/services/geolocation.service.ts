import { PlaceLocation } from './../models/placeLocation';
import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  requestLocation(callback){
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      err => {
        callback(null);
      }
    );
  }//requestLocation

  getMapLink(location: PlaceLocation){
    let query = "";
    if(location.latitude){
      query = location.latitude + "," + location.longtitude;
    } else {
      query = `${location.address},${location.city}`;
    }

    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
  }//getMapLink

}//cs
