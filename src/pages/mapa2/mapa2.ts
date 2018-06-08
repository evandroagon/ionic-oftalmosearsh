import { User } from './../../providers/auth-service/user';
import { Component, } from '@angular/core';
//import { ContactProvider, Contact } from '../../providers/contact/contact';
import { Contact } from '../../providers/contact/contact';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa2',
  templateUrl: 'mapa2.html',
})
export class Mapa2Page {
  map:any;
  model: Contact;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) { 
    if (this.navParams.data.contact && this.navParams.data.key) {
      this.model = this.navParams.data.contact;
      this.key =  this.navParams.data.key;
    } else {
      this.toast.create({ message: 'Erro ao localizar contato.', duration: 3000, position: 'botton' }).present();
    }

  }

  ionViewDidLoad() {
    //const position = new google.maps.LatLng(-22.018159,-47.891247);
    var latitudex, longitudex: number;
    latitudex = this.model.lat;
    longitudex = this.model.long;
    const position = new google.maps.LatLng(latitudex, longitudex);
    //console.log('lat:',latitude,'long',longitude);

    const mapOptions = {
      zoom: 18,
      center: position,
      //disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    

    const marker = new google.maps.Marker({
      position: position,
      map: this.map,

      //Titulo
      title: (this.model.name+'coordenadas geográficas:'+latitudex+','+longitudex),
      //Animção
      animation: google.maps.Animation.DROP, // BOUNCE
      //Icone
      icon: 'assets/imgs/small.png'
    });
  }
  
}