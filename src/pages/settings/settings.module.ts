import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingsPage} from './settings';
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';
import { Insomnia } from '@ionic-native/insomnia';
import { NativeStorage } from '@ionic-native/native-storage';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  imports:[IonicPageModule.forChild(SettingsPage)],  //no forRoot here
  declarations:[SettingsPage],
  exports:[SettingsPage],
  providers:[ThreeDeeTouch, Insomnia, NativeStorage, Calendar],
  entryComponents:[SettingsPage]  //<-- add all your module components to here
})
export class SettingsModule{

}
