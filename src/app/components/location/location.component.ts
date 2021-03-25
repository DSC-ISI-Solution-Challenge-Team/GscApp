import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from 
'@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  @ViewChild('mapContainer', {static: false}) 

  gmap?: ElementRef;
  map?: google.maps.Map;
  lat = 36.833374299999996;
  lng = 10.1387624;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
   

  constructor(public pos : LocationService) { }

  ngOnInit(): void {
  }


  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
    streetViewControl:false,
    mapTypeControl: false,
    zoomControl: false
  };
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap?.nativeElement, 
      this.mapOptions
    );
    this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }



 

  marker = new google.maps.Marker({
    position: this.coordinates,
    title : 'alaa',
    clickable:true,
  })
 
  

  
  
}


 

