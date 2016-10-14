import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { OrderFormListComponent } from '../pages/orderForm/component/orderForm-list.component';
import { RequestListComponent } from '../pages/request/component/request-list.component';
import { LoginComponent } from '../pages/shared/component/login.component';
import { Auth, User } from '@ionic/cloud-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;

  pages: Array<{ title: string, component: any }>;
  username: string;
  orderFormListComponent = OrderFormListComponent;
  requestListComponent = RequestListComponent;
  reportingComponent = ReportingComponent;

  constructor(public platform: Platform, private _auth: Auth, private _user: User, private _alertController: AlertController) {
    this.initializeApp();

    let menu: any;

    if (this._auth.isAuthenticated()) {
      menu = { title: 'Welcome ' + this._user.details.name + ' (Logout)', component: null }
    } else {
      menu = { title: 'Login', component: LoginComponent }
    }

    this.username = this._user.details.username;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      if (Splashscreen) {
        setTimeout(() => {
          Splashscreen.hide();
        }, 100);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
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
            this._auth.logout();
            this.nav.setRoot(LoginComponent);
          }
        }
      ]
    });
    confirm.present();
  }
}
