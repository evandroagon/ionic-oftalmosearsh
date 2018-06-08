import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * https://developers.google.com/maps/documentation/javascript/directions
 */


@IonicPage()
@Component({
  selector: 'page-mapa4',
  templateUrl: 'mapa4.html',
})
export class Mapa4Page {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  mapOptions: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  constructor(private geolocation: Geolocation) { }

  ionViewDidLoad() {    
      this.initializeMap();
    }


  initializeMap() {
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.startPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        zoom: 18,
        center: this.startPosition,
        //disableDefaultUI: true
        //tilt: 45
      }

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      this.directionsDisplay.setMap(this.map);
  
      const marker = new google.maps.Marker({
        position: this.startPosition,
        map: this.map,
      });
      this.map.setTilt(15);
      this.map.setMap;

    }).catch((error) => {
      console.log('Erro ao recuperar sua posição', error);
    });
  
    //this.startPosition = new google.maps.LatLng(-21.763409, -43.349034);

    //const mapOptions = this.mapOptions
      //zoom: 18,
     // center: this.startPosition,
    //  disableDefaultUI: true
   // }

   
  }
  

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}

