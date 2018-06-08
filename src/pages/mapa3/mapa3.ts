import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';



declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa3',
  templateUrl: 'mapa3.html',
})
export class Mapa3Page {
  map: any;

  constructor(private geolocation: Geolocation) { }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position,
          disableDefaultUI: true,
          //tilt: 45
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
       
        const marker = new google.maps.Marker({
          position: position,
          map: this.map
          
        });
        this.map.setTilt(15);
        this.map.setMap;

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }
}