import { HomeContactPage } from './../pages/home-contact/home-contact';
import { AuthService} from './../providers/auth-service/auth-service';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { GoogleMaps } from '@ionic-native/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { ContactProvider } from '../providers/contact/contact';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
      apiKey: "AIzaSyA4VfEJjdYVaK5TO656bnuesxmq3CDLcRM",
    	authDomain: "ionic3-firebase-auth.firebaseapp.com",
    	databaseURL: "https://ionic3-firebase-auth.firebaseio.com",
    	projectId: "ionic3-firebase-auth",
    	storageBucket: "ionic3-firebase-auth.appspot.com",
    	messagingSenderId: "215674817806" 
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    HomeContactPage

   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    HomeContactPage
    
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    AngularFireDatabase,
    HomeContactPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    AuthService,
    DatePipe,
    ContactProvider
  ]
  
})
export class AppModule {}
