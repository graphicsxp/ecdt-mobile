import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HeaderComponent} from './component/header.component';
import {LoadingService} from './service/loading-service';
import {NetworkAvailabilityService} from './service/networkAvailability-service';
import {LoginService} from './service/login-service';

@NgModule({
  imports:[IonicModule],  //no forRoot here
  declarations:[HeaderComponent],
  providers:[LoadingService, NetworkAvailabilityService, LoginService],
  exports:[HeaderComponent],
  entryComponents:[HeaderComponent]  //<-- add all your module components to here
})

export class SharedModule{

}