import { AuthProvider } from './../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AppVersion } from 'ionic-native';
import { FCM } from '@ionic-native/fcm';

import * as firebase from "firebase";

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { CalendarPage } from './../pages/calendar/calendar';
import { RequestListComponent } from '../pages/request/request-list/request-list.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LoginComponent } from '../pages/login/login';
import { QuickActionService } from '../pages/shared/service/quickAction-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;
  username: string;
  requestListComponent = RequestListComponent;
  reportingComponent = ReportingComponent;
  settingsComponent = SettingsComponent;
  contactComponent = ContactComponent;
  calendarComponent = CalendarPage;

  numberOfDeliveredRequests: number = 0;
  app: any = {
    name: '',
    versionCode: '',
    versionNumber: '',
    packageName: ''
  };

  constructor(public platform: Platform, private _auth: AuthProvider, private _alertController: AlertController, private fcm: FCM, public quickActionService: QuickActionService) {
    this.initializeApp();
    this.initializeFirebase();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      AppVersion.getAppName().then(v => this.app['name'] = v);
      AppVersion.getVersionCode().then(v => this.app['versionCode'] = v);
      AppVersion.getVersionNumber().then(v => this.app['versionNumber'] = v);
      AppVersion.getPackageName().then(v => this.app['packageName'] = v);

      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false); // for ios overlapping

      // quick action service
      this.quickActionService.onHomeIconPressed.subscribe(
        (payload) => {
          switch (payload) {
            case 'reports':
              this.openPage(ReportingComponent);
              break;
            case 'requests':
              this.openPage(RequestListComponent);
              break;
            case 'settings':
              this.openPage(SettingsComponent);
              break;
            case 'contact':
              this.openPage(ContactComponent);
              break;
          }
        }
      );

      if (Splashscreen) {
        setTimeout(() => {
          Splashscreen.hide();
        }, 100);
      }
    });
  }

  initializeFirebase() {

    var config = {
      apiKey: "AIzaSyBAHq9j_P_iMnArK67woWQ30PLvno9iMls",
      authDomain: "ecdt-mobile.firebaseapp.com",
      databaseURL: "https://ecdt-mobile.firebaseio.com",
      projectId: "ecdt-mobile",
      storageBucket: "ecdt-mobile.appspot.com",
      messagingSenderId: "253214739305"
    };
    firebase.initializeApp(config);

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginComponent';
        unsubscribe();
      } else {
        this.username = user.displayName;
        this.rootPage = 'CalendarPage';
        unsubscribe();
      }
    });

    // this.fcm.subscribeToTopic('marketing');

    // this.fcm.getToken().then((t) => {
    //   console.log('Token received:', t)
    // });

    // this.fcm.onNotification().subscribe(data => {
    //   if (data.wasTapped) {

    //   } else {

    //   };

    //   this.numberOfDeliveredRequests++;
    // })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page == this.requestListComponent) {
      this.numberOfDeliveredRequests = 0;
    }
    console.log('openPage called with:' + page);
    this.nav.setRoot(page);
  }

  logout() {

    let confirm = this._alertController.create({
      title: 'Confirm',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this._auth.logoutUser();
            this.nav.setRoot('LoginComponent');
          }
        }
      ]
    });
    confirm.present();
  }
}
