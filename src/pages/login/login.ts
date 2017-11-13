import { SignupPage } from './../signup/signup';
import { CalendarPage } from './../calendar/calendar';
import { AuthProvider } from './../../providers/auth/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IonicPage, NavController, Loading, LoadingController, MenuController, Platform, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { TouchID } from '@ionic-native/touch-id';
import { EmailValidator } from '../../validators/email';

declare var FingerprintAuth: any;
declare var plugins: any;

@IonicPage()

@Component({
  selector: 'login-page',
  templateUrl: './login.html',
  providers: []
})
export class LoginComponent {
  signingUp: boolean = true;
  name: string;
  email: string = 'graphicsxp@gmail.com';
  password: string = 'welcome1';
  confirmPassword: string;
  errorMessage: string;
  loginForm: FormGroup;
  loading: Loading;

  constructor(private _platform: Platform,
    private _loadingController: LoadingController,
    private _alertController: AlertController,
    private _authProvider: AuthProvider,
    private _formBuilder: FormBuilder,
    private _navController: NavController,
    private _menuController: MenuController) {

    this.loginForm = _formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this._platform.ready().then(() => {
      // if (this._auth.isAuthenticated()) {
      //   console.log('user is already authenticated');
      //   if (this._platform.is('android')) {
      //     console.log('platform is android');
      //     this.showFingerprintAndroid();
      //   } else if (this._platform.is('ios')) {
      //     console.log('platform is ios');
      //     this.showFingerprintIos();
      //   }
      // }
    });
  }

  ionViewDidLoad() {
    this._menuController.enable(false);
  }

  ionViewDidLeave() {
    this._menuController.enable(true);
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this._authProvider.loginUser(this.loginForm.value.email,
        this.loginForm.value.password)
        .then(authData => {
          this.loading.dismiss().then(() => {
            this._navController.setRoot('CalendarPage');
          });
        }, error => {
          this.loading.dismiss().then(() => {
            let alert = this._alertController.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
      this.loading = this._loadingController.create();
      this.loading.present();
    }
  }

  goToSignup(): void {
    this._navController.push('signup');
  }

  goToResetPassword(): void {
    this._navController.push('resetpassword');
  }
}
