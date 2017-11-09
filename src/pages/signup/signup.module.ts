import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SignupComponent} from './signup.component';

@NgModule({
  imports:[IonicPageModule.forChild(SignupComponent)],  //no forRoot here
  declarations:[SignupComponent],
  exports:[SignupComponent],
  entryComponents:[SignupComponent]  //<-- add all your module components to here
})
export class SignupModule{

}
