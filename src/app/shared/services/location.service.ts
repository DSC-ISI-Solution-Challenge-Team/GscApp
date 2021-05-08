import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthServicesService } from './auth-services.service';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public lat :any;
  public lng : any; 
 
  constructor(public afs: AngularFirestore,public authService : AuthServicesService) { }

 async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.setLoc(this.lng,this.lat)
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

async setLoc(lng  : string , lat : string ) {
this.afs.collection("location").add({
  lat : this.lat,
  lng : this.lng,
})
}

 
}
