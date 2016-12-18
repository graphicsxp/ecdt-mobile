import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { RequestListComponent } from '../pages/request/request-list/request-list.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { LoginComponent } from '../pages/login/login.component';
import { QuickActionService } from '../pages/shared/service/quickAction-service'; 
import { Auth, User } from '@ionic/cloud-angular';
import { Push, PushToken } from '@ionic/cloud-angular';
import { AppVersion } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;

  pages: Array<{ title: string, component: any }>;
  username: string;
  requestListComponent = RequestListComponent;
  reportingComponent = ReportingComponent;
  settingsComponent = SettingsComponent;

  numberOfDeliveredRequests: number = 0;
  app: any = {
    name: '',
    versionCode: '',
    versionNumber: '',
    packageName: ''
  };

  constructor(public platform: Platform, private _auth: Auth, public _user: User, private _alertController: AlertController, public push: Push, public quickActionService:QuickActionService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

    this.username = this._user.details.username;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      AppVersion.getAppName().then(v => this.app['name'] = v);
      AppVersion.getVersionCode().then(v => this.app['versionCode'] = v);
      AppVersion.getVersionNumber().then(v => this.app['versionNumber'] = v);
      AppVersion.getPackageName().then(v => this.app['packageName'] = v);

      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });

      this.push.rx.notification()
        .subscribe((msg) => {
          this.numberOfDeliveredRequests++;
        });

      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false); // for ios overlapping

      // quick action service
      this.quickActionService.onHomeIconPressed.subscribe(
                (payload) => {
                    switch(payload){
                      case 'reports':
                        this.openPage(ReportingComponent);
                        break;
                      case 'requests':
                        this.openPage(RequestListComponent);
                        break;
                      case 'settings':
                        this.openPage(SettingsComponent);
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page == this.requestListComponent) {
      this.numberOfDeliveredRequests = 0;
    }

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
