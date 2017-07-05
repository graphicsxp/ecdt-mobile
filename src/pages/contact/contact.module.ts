import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [IonicModule],  //no forRoot here
  declarations: [ContactComponent],
  exports: [ContactComponent],
  entryComponents: [ContactComponent]  //<-- add all your module components to here
})
export class ContactModule {

}