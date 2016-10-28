import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SettingsComponent} from './settings.component';

@NgModule({
  imports:[IonicModule],  //no forRoot here
  declarations:[SettingsComponent],
  exports:[SettingsComponent],
  entryComponents:[SettingsComponent]  //<-- add all your module components to here
})
export class SettingsModule{

}