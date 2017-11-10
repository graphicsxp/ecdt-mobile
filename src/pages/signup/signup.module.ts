import { SignupPage } from './signup';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  imports:[IonicPageModule.forChild(SignupPage)],  //no forRoot here
  declarations:[SignupPage],
  exports:[SignupPage],
  entryComponents:[SignupPage]  //<-- add all your module components to here
})
export class SignupModule{

}
