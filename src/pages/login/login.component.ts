import { NavController, LoadingController, MenuController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginService } from '../shared/service/login-service';
import { RequestListComponent } from '../request/request-list/request-list.component'
import { SignupComponent } from '../signup/signup.component';
import { TouchID } from 'ionic-native';
import { Auth, User } from '@ionic/cloud-angular';

declare var FingerprintAuth: any;
declare var plugins: any;

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
    private _menuController: MenuController,
    private _auth: Auth,
    private _user: User) {}

  ionViewDidLoad() {
    this._platform.ready().then(() => {
      this._menuController.enable(false);
      if (this._auth.isAuthenticated()) {
        console.log('user is already authenticated');
        if (this._platform.is('android')) {
          console.log('platform is android');
          this.showFingerprintAndroid();
        } else if (this._platform.is('ios')) {
          console.log('platform is ios');
          this.showFingerprintIos();
        }
      }
    })
  }

  ionViewDidLeave() {
    this._menuController.enable(true);
  }

  login() {
    this.showLoader();
    this._auth.login("basic", {
      'email': this.email,
      'password': this.password
    }).then((res) => {
      this.loading.dismiss();
      this._navController.setRoot(RequestListComponent);
    }, (err) => {
      this.loading.dismiss();
      alert('Authentication failed.');
    });
  }

  showFingerprintAndroid() {
    console.log('fingerprint android authentication started');
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
              navController.setRoot(RequestListComponent);
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
    console.log('fingerprint ios authentication started');
    var navController = this._navController;
    console.log(TouchID);
    TouchID.isAvailable()
      .then(
        res => {
          TouchID.verifyFingerprint('Scan your fingerprint please')
            .then(
              res => {
                console.log('ok: ' + res);
                navController.setRoot(RequestListComponent);
              },
              err => alert('Something is wrong: ' + JSON.stringify(err))
            );
        },
        err => console.log('touchid not available: ' + err)
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
