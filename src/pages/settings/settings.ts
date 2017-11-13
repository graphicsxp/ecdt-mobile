import { Component } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';

import { Insomnia } from '@ionic-native/insomnia';
import { NativeStorage } from '@ionic-native/native-storage';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public keepAwake: boolean = false;

  constructor(public navCtrl: NavController,
    private _platform: Platform,
    private insomnia: Insomnia,
    private calendar: Calendar,
    private nativeStorage: NativeStorage) {
    this._platform.ready().then(() => {
      console.log('Hello Settings Page');
      this.nativeStorage.getItem("keepAwake").then(
        data => this.keepAwake = data,
        error => console.log('error retrieving keepAwake from native storage')
      );
    });
  }

  createEvent(): void {
    this.calendar.createEvent('New meeting', 'Salle Vienne', 'discussion about TRA module', new Date(2017, 3, 1, 9, 0), new Date(2017, 3, 1, 11, 0)).then(
      (msg) => {
        this.calendar.openCalendar(new Date(2017, 3, 1, 9, 0));
      },
      (err) => { console.log(err); }
    );
  }

  onKeepAwake(): void {
    console.log('onchange keep awake');

    this.nativeStorage.setItem("keepAwake", this.keepAwake).then(
      () => console.log('storing keepAwake in native storage successful')
    );

    if (this.keepAwake) {
      this.insomnia.keepAwake().then(
        () => console.log('keep awake successful'),
        () => console.log('keep awake failed')
      );
    } else {
      this.insomnia.allowSleepAgain().then(
        () => console.log('allow sleep again successful'),
        () => console.log('allow sleep again failed')
      );
    }
  }
}
