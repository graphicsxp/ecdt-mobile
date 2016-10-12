import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { Page2 } from '../pages/page2/page2';
import { OrderFormListComponent } from '../pages/orderForm/component/orderForm-list.component';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ReportingComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Reporting', component: ReportingComponent },
      // { title: 'Requests', component: RequestListComponent },
      { title: 'Page 2', component: Page2 },
      { title: 'Order Forms', component: OrderFormListComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
