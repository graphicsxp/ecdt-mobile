import { Component } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';

import { Insomnia, NativeStorage, Calendar } from 'ionic-native';

@IonicPage()

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public keepAwake: boolean = false;

  constructor(public navCtrl: NavController, private _platform: Platform) {
    this._platform.ready().then(() => {
      console.log('Hello Settings Page');
      NativeStorage.getItem("keepAwake").then(
        data => this.keepAwake = data,
        error => console.log('error retrieving keepAwake from native storage')
      );
    });
  }

  createEvent(): void {
    Calendar.createEvent('New meeting', 'Salle Vienne', 'discussion about TRA module', new Date(2017, 3, 1, 9, 0), new Date(2017, 3, 1, 11, 0)).then(
      (msg) => {
        Calendar.openCalendar(new Date(2017, 3, 1, 9, 0));
      },
      (err) => { console.log(err); }
    );
  }

  onKeepAwake(): void {
    console.log('onchange keep awake');

    NativeStorage.setItem("keepAwake", this.keepAwake).then(
      () => console.log('storing keepAwake in native storage successful')
    );

    if (this.keepAwake) {
      Insomnia.keepAwake().then(
        () => console.log('keep awake successful'),
        () => console.log('keep awake failed')
      );
    } else {
      Insomnia.allowSleepAgain().then(
        () => console.log('allow sleep again successful'),
        () => console.log('allow sleep again failed')
      );
    }
  }
}
