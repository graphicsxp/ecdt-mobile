import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingsPage} from './settings';

@NgModule({
  imports:[IonicPageModule.forChild(SettingsPage)],  //no forRoot here
  declarations:[SettingsPage],
  exports:[SettingsPage],
  entryComponents:[SettingsPage]  //<-- add all your module components to here
})
export class SettingsModule{

}
