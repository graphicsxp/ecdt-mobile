import { ResetPasswordPage } from './reset-password';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  imports:[IonicPageModule.forChild(ResetPasswordPage)],  //no forRoot here
  declarations:[ResetPasswordPage],
  exports:[ResetPasswordPage],
  entryComponents:[ResetPasswordPage]  //<-- add all your module components to here
})
export class ResetPasswordModule{

}
