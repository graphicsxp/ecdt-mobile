import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LoginComponent} from './login';
import { TouchID } from '@ionic-native/touch-id';

@NgModule({
  imports:[IonicPageModule.forChild(LoginComponent)],  //no forRoot here
  declarations:[LoginComponent],
  exports:[LoginComponent],
  providers:[TouchID],
  entryComponents:[LoginComponent]  //<-- add all your module components to here
})
export class LoginModule{

}
