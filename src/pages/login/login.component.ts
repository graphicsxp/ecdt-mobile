import { NavController, LoadingController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginService } from '../shared/service/login-service';
import { RequestListComponent } from '../request/request-list/request-list.component'
import { SignupComponent } from '../signup/signup.component';

import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  signingUp: boolean = true;
  name: string;
  email: string = 'graphicsxp@gmail.com';
  password: string = 'welcome1';
  confirmPassword: string;
  errorMessage: string;
  loading: any;

  constructor(private _platform: Platform,
    private _loadingController: LoadingController,
    private _navController: NavController,
    private _auth: Auth,
    private _user: User) { }

  ionViewDidLoad() {
    if (this._auth.isAuthenticated()) {
      console.log('user is already authenticated');
      if (this._platform.is('android')) {
        console.log('platform is android');
        this.showFingerprintAndroid();
      }
      else if (this._platform.is('ios')) {
        console.log('platform is ios');
        this.showFingerprintIos();
      }
    }
  }

  login() {
    this.showLoader();
    this._auth.login("basic", { 'email': this.email, 'password': this.password }).then((res) => {
      this.loading.dismiss();
      this._navController.setRoot(RequestListComponent);
    }, (err) => {
      this.loading.dismiss();
      alert('Authentication failed.');
    });

  }

  showFingerprintAndroid() {
    var token = this._auth.getToken();
    var clientId = this._user.id;
    var navController = this._navController;

    FingerprintAuth.isAvailable(function (result) {
      if (result.isAvailable) {
        if (result.hasEnrolledFingerprints) {
          FingerprintAuth.show({
            clientId: clientId,
            clientSecret: token
          }, function (result) {
            if (result.withFingerprint) {
              console.log("Successfully authenticated using a fingerprint");
              navController.setRoot(RequestListComponent);
            } else if (result.withPassword) {
              console.log("Authenticated with backup password");
            }
          }, function (error) {
            console.log(error); // "Fingerprint authentication not available"
          });
        } else {
          console.log("Fingerprint auth available, but no fingerprint registered on the device");
        }
      }
    }, function (message) {
      console.log("Cannot detect fingerprint device : " + message);
    });
  }

  showFingerprintIos() {
    var navController = this._navController;

    plugins.touchid.isAvailable(
      function () {
        plugins.touchid.verifyFingerprint(
          'Scan your fingerprint please', // this will be shown in the native scanner popup
          function (msg) {
            console.log('ok: ' + msg);
            navController.setRoot(RequestListComponent);
          }, // success handler: fingerprint accepted
          function (msg) {
            alert('Something is wrong: ' + JSON.stringify(msg));
          } // error handler with errorcode and localised reason
        );
      },
      function (msg) {
        console.log('touchid not available: ' + msg);
      }
    );
  }

  showLoader() {
    this.loading = this._loadingController.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  launchSignup() {
    this._navController.push(SignupComponent);
  }
}