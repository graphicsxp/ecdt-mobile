import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LoginComponent} from './login.component';

@NgModule({
  imports:[IonicModule],  //no forRoot here
  declarations:[LoginComponent],
  exports:[LoginComponent],
  entryComponents:[LoginComponent]  //<-- add all your module components to here
})
export class LoginModule{

}