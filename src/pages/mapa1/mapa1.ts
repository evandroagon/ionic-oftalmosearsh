import { Component } from '@angular/core';
//import { ContactProvider, Contact } from '../../providers/contact/contact';
import { Contact } from '../../providers/contact/contact';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import {Geolocation} from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-mapa1',
  templateUrl: 'mapa1.html',
})

export class Mapa1Page {
  public model: Contact;
  public key: string;
  medicos: Array<Medico>;
//medicos: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
    if (this.navParams.data.contact && this.navParams.data.key) {
      this.model = this.navParams.data.contact;
      this.key =  this.navParams.data.key;
    } else {
      this.toast.create({ message: 'Erro ao localizar contato.', duration: 3000, position: 'botton' }).present();
    }

   }

  ionViewDidLoad() {
    this.getMedicos();
    //this.medicos = this.model;
  }

  

  getMedicos() {
   this.medicos =[
      new Medico('Instituto Oftalmológico São Carlos Ltda, distância km:', 2.000, 'Rua Major José Inácio', '2403', 'Centro', 'São Carlos', 'SP'),
      new Medico('IDECO - Oftalmologia - Med Clin, distância km:', 5.300, 'R. Cap. Adão Pereira de Souza Cabral', '597', 'Centro', 'São Carlos', 'SP'),
      new Medico('Oftalmologia São Carlos - Dr. Fabiano S. Sakamoto, distância km:', 13.000, 'R. Paulino Botelho de Abreu Sampaio', '441', 'Parque Santa Monica', 'São Carlos','SP')];
      
      

  }}
  

export class Medico {
  nome: string;
  valor: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  mapa: string;

  constructor(nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.mapa = this.getMapa();
  }

  private getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:green|' + this.getEndereco() + '&key=AIzaSyCxqgKqZMHNzOV2TETOwjRJAUpuh3aeK1c'
  }
}