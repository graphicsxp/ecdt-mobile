import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingsComponent} from './settings.component';

@NgModule({
  imports:[IonicPageModule.forChild(SettingsComponent)],  //no forRoot here
  declarations:[SettingsComponent],
  exports:[SettingsComponent],
  entryComponents:[SettingsComponent]  //<-- add all your module components to here
})
export class SettingsModule{

}
