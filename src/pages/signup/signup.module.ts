import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {SignupComponent} from './signup.component';

@NgModule({
  imports:[IonicModule],  //no forRoot here
  declarations:[SignupComponent],
  exports:[SignupComponent],
  entryComponents:[SignupComponent]  //<-- add all your module components to here
})
export class SignupModule{

}