import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Insomnia, NativeStorage } from 'ionic-native';

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {

  public keepAwake: boolean = false;

  constructor(public navCtrl: NavController, private _platform: Platform) {
    this._platform.ready().then(()=>{
        console.log('Hello Settings Page');
            NativeStorage.getItem("keepAwake").then(
              data => this.keepAwake =data,
              error => console.log('error retrieving keepAwake from native storage')
            );
    });
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
    }else{
      Insomnia.allowSleepAgain().then(
        () => console.log('allow sleep again successful'),
        () => console.log('allow sleep again failed')
      );
    }
  }
}
