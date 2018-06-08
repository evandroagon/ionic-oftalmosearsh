import { HomeContactPage } from './../home-contact/home-contact';
import { SigninPage } from './../signin/signin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
//import { ContactProvider, Contact, ContactList } from '../../providers/contact/contact';


//declare var google;

/**
 * Para obter a chave
 * https://developers.google.com/maps/documentation/static-maps/get-api-key?hl=pt-br
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, private authService: AuthService) { }

  ionViewDidLoad() {
    this.pages = [
      { title: 'Lista Médicos Credenciados', component: 'Mapa1Page' },
     //{ title: 'Catedral de São Carlos', component: 'Mapa2Page' },
      { title: 'Minha Localização', component: 'Mapa3Page' },
      { title: 'Traçar uma rota', component: 'Mapa4Page' }      
    ];
  }


  signOut() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  chamarHomeContact() {
        this.navCtrl.push(HomeContactPage);
  }

  openPage(page: any) {
    this.navCtrl.push(page.component);
  }
}