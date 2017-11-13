import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginComponent } from './login';

@NgModule({
  imports: [IonicPageModule.forChild(LoginComponent)],  //no forRoot here
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [],
  entryComponents: [LoginComponent]  //<-- add all your module components to here
})
export class LoginModule {

}
