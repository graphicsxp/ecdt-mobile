import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AuthProvider } from './../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';
import { FCM } from '@ionic-native/fcm';

import * as firebase from "firebase";

import { CalendarPage } from './../pages/calendar/calendar';
import { LoginComponent } from '../pages/login/login';
import { QuickActionService } from '../pages/shared/service/quickAction-service';
import { RequestListComponent } from './../pages/request/request-list/request-list.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;
  username: string;
  requestListComponent = RequestListComponent;

  numberOfDeliveredRequests: number = 0;
  numberOfCalendarEvents: number = 0;
  app: any = {
    name: '',
    versionCode: '',
    versionNumber: '',
    packageName: ''
  };

  constructor(private _platform: Platform,
    private _auth: AuthProvider,
    private _alertController: AlertController,
    private _androidFingerprintAuth: AndroidFingerprintAuth,
    private fcm: FCM,
    public quickActionService: QuickActionService,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appVersion: AppVersion,
    private _localNotifications: LocalNotifications) {
    this.initializeApp();
    this.initializeFirebase();
  }

  initializeApp() {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.appVersion.getAppName().then(v => this.app['name'] = v);
      this.appVersion.getVersionCode().then(v => this.app['versionCode'] = v);
      this.appVersion.getVersionNumber().then(v => this.app['versionNumber'] = v);
      this.appVersion.getPackageName().then(v => this.app['packageName'] = v);

      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false); // for ios overlapping

      // quick action service
      this.quickActionService.onHomeIconPressed.subscribe(
        (payload) => {
          switch (payload) {
            case 'reports':
              this.openPage('ReportingPage');
              break;
            case 'requests':
              this.openPage(RequestListComponent);
              break;
            case 'settings':
              this.openPage('SettingsPage');
              break;
            case 'contact':
              this.openPage('ContactPage');
              break;
          }
        }
      );
    });
  }

  initializeFirebase() {
    this._platform.ready().then(() => {
      var config = {
        apiKey: "AIzaSyBAHq9j_P_iMnArK67woWQ30PLvno9iMls",
        authDomain: "ecdt-mobile.firebaseapp.com",
        databaseURL: "https://ecdt-mobile.firebaseio.com",
        projectId: "ecdt-mobile",
        storageBucket: "ecdt-mobile.appspot.com",
        messagingSenderId: "253214739305"
      };
      firebase.initializeApp(config);

      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.rootPage = 'LoginComponent';
          unsubscribe();
        } else {
          console.log('user is already authenticated');
          this.username = user.displayName;
          if (this._platform.is('android')) {
            console.log('platform is android');
            this.showFingerprintAndroid();
          } else if (this._platform.is('ios')) {
            // console.log('platform is ios');
            // this.showFingerprintIos();
          }

          //this.rootPage = 'CalendarPage';
          unsubscribe();
        }
      });

      if (this._platform.is('cordova')) {
        this.fcm.getToken().then((t) => {
          console.log(t.toString());
          if (this.splashScreen) {
            this.splashScreen.hide();
          }
        });

        this.fcm.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            this.nav.setRoot('CalendarPage');
          } else {
            this._localNotifications.schedule({
              id: 1,
              text: data.notification_title,
              data: {
                title: data.notificationTitle,
                body: data.notificationMessage,
                targetLanguage: data.targetLanguage,
                taskDeadline: data.taskDeadline,
                taskType: data.taskType
              }
            });
          };

          this.nav.setRoot('CalendarPage', { title: data.notificationTitle + ':' + data.notificationMessage, taskDeadline: data.taskDeadline, taskType: data.taskType });
          this.numberOfCalendarEvents++;
        })
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page == this.requestListComponent) {
      this.numberOfDeliveredRequests = 0;
    }
    if (page === 'CalendarPage') {
      this.numberOfCalendarEvents = 0;
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

  async showFingerprintAndroid() {
    console.log('fingerprint android authentication started');
    var token = await this._auth.getToken();
    var clientId = this._auth.getUserEmail();
    var self = this;

    this._androidFingerprintAuth.isAvailable().then(function (result) {
      if (result.isAvailable) {
        if (result.hasEnrolledFingerprints) {
          self._androidFingerprintAuth.encrypt({
            clientId: clientId,
            token: token
          }).then(function (result: any) {
            if (result.withFingerprint || result.withBackup || result.withPassword) {
              self.nav.setRoot('CalendarPage');
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    });
  }

  // showFingerprintIos() {
  //   console.log('fingerprint ios authentication started');
  //   var navController = this._navController;
  //   console.log(TouchID);
  //   TouchID.isAvailable()
  //     .then(
  //     res => {
  //       TouchID.verifyFingerprint('Scan your fingerprint please')
  //         .then(
  //         res => {
  //           console.log('ok: ' + res);
  //           navController.setRoot(RequestListComponent);
  //         },
  //         err => alert('Something is wrong: ' + JSON.stringify(err))
  //         );
  //     },
  //     err => console.log('touchid not available: ' + err)
  //     );
  // }
}
