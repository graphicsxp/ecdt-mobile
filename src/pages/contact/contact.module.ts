import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
  imports: [IonicPageModule.forChild(ContactPage)],  //no forRoot here
  declarations: [ContactPage],
  exports: [ContactPage],
  entryComponents: [ContactPage]  //<-- add all your module components to here
})
export class ContactModule {

}
